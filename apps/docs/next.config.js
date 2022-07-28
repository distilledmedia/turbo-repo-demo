const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['hermes.daft.ie'],
  },
});

module.exports = {
  images: {
    domains: ['hermes.daft.ie'],
  },
};
