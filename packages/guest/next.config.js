const withTM = require('next-transpile-modules')(['@todo-liszt/common']);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
});
