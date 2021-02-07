var publicPath = process.env.npm_lifecycle_event === 'start' ? '' : '/js/'

module.exports = {
  srcDir: 'src',
  head: {
    title: 'Turf.js | Advanced geospatial analysis',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Turf.js | Advanced geospatial analysis for browsers and Node.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:200,400' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Istok+Web' }
    ]
  },
  plugins: [
    { src: '~plugins/highlight' },
    { src: '~plugins/DomPortal' },
    { src: '~plugins/Visibility', ssr: false }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    publicPath: publicPath,
    vendor: [
      // 'iview'
    ],
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    dir: './dist',
    publicPath: './js/'
  }
}
