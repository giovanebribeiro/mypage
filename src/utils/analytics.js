import ReactGA from 'react-ga4';

export const initGA = () => {
  // TODO: Replace with your actual GA4 tracking ID
  // You need to create a GA4 property at https://analytics.google.com
  // Current UA code (UA-22546389-1) is deprecated and won't work with GA4
  ReactGA.initialize('G-443168392');
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
};
