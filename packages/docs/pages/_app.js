/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import Layout from '../components/Layout';

import { Events, initMixpanel, trackingFromWeb, trackLink } from '../utils/mixpanel';

import '@transferwise/neptune-css/dist/css/neptune.css';
import 'currency-flags/dist/currency-flags.min.css';
import '@transferwise/icons/dist/icons.min.css';

import '../static/assets/main.css';

class MyApp extends App {
  componentDidMount() {
    const { pathname } = Router;
    if (pathname === '/') {
      Router.push(`${process.env.NODE_ENV === 'production' ? '/neptune-web/' : '/'}about/Home`);
    }
    initMixpanel();
    trackingFromWeb(() => {
      console.log('trackingFromWeb');
      trackLink('.Nav__Link', Events.PAGE_VIEWED, { page: window.location.pathname });
    });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Neptune Design System — TransferWise</title>
          <script src="https://transferwise.com/cookie-consent.js" />
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
