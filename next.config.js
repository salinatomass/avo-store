// to run `next export`:

// module.exports = {
//   images: {
//     unoptimized: true,
//   },
// }

// Proxy

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: '/avocado/:path*', // willcards
//         destination: '/product/:path*',
//       },
//     ]
//   },
// }

module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}
