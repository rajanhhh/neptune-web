const getBranch = require('git-branch');
const rehypePrism = require('@mapbox/rehype-prism');
const rehypeSlug = require('rehype-slug');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withMDX = require('@next/mdx')({
  options: {
    rehypePlugins: [rehypeSlug, rehypePrism],
  },
});
const withTM = require('next-transpile-modules');

const pageExtensions = ['js', 'mdx'];

const isProdMode = process.env.NODE_ENV === 'production';

const branch = getBranch.sync();
const isMasterBranch = branch === 'master';

const assetPrefix = isProdMode ? `/neptune-web${isMasterBranch ? '' : `/branch/${branch}`}` : '';
const isProdInstance = isProdMode && isMasterBranch;

module.exports = () =>
  withTM(
    withImages(
      withFonts(
        withCSS(
          withMDX({
            transpileModules: ['@transferwise/dynamic-flows'],
            pageExtensions,
            assetPrefix,
            env: {
              ASSET_PREFIX: assetPrefix,
              IS_PROD_INSTANCE: isProdInstance,
            },
            webpack: (config) => {
              config.module.rules.push({
                test: /\.code.js$/,
                use: 'raw-loader',
              });

              return config;
            },
          }),
        ),
      ),
    ),
  );
