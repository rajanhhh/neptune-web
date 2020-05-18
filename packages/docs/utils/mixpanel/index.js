import mixpanel from 'mixpanel-browser';

// we sent data to Mixpanel only from prod instance (https://transferwise.github.io/neptune-web)
const { IS_PROD_INSTANCE } = process.env;

export const Events = {
  /**
   * Event for tracking pages which user opens
   */
  PAGE_VIEWED: 'Page Viewed',
};

export function initMixpanel() {
  console.log('initMixpanel');
  mixpanel.init('8ba4a7a5182f05e0a79ded57d5d2f051', {
    // We add "opt_out_tracking_by_default=true" and "opt_out_persistence_by_default=true" to mixpanel.init
    // so we don't set cookies and don't track customers before they give us their consent
    opt_out_tracking_by_default: true,
    opt_out_persistence_by_default: true,
    // secure_cookie: true,
    debug: true,
  });

  window.addEventListener('accepttwcookieconsent', () => {
    mixpanel.opt_in_tracking();
  });
}

export function trackEvent(name, props) {
  if (IS_PROD_INSTANCE) {
    // https://developer.mixpanel.com/docs/javascript-full-api-reference#mixpaneltrack
    mixpanel.track(eventNamePrefix(name), props);
  } else {
    // eslint-disable-next-line no-console
    console.log(`Track Event '${name}', props`, props);
  }
}

export function trackLink(selector, name, props) {
  if (IS_PROD_INSTANCE) {
    // https://developer.mixpanel.com/docs/javascript-full-api-reference#mixpaneltrack_links
    mixpanel.track_links(selector, eventNamePrefix(name), props);
  } else {
    // eslint-disable-next-line no-console
    console.log(`Enabled Link tracking for '${selector}' selector, event: '${name}', props`, props);
  }
}

function eventNamePrefix(name) {
  return `Neptune - ${name}`;
}
