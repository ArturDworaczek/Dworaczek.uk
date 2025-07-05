const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: [],

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    watchOptions: {
      poll: 500,
      aggregateTimeout: 300,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 15000,
        maxSize: 250000,
      }
    }
  },

  devServer: {
    liveReload: false, // Prevent full page reload
    hot: true, // Enable hot reloading
    host: '0.0.0.0',
    client: {
      webSocketURL: 'ws://localhost:8080/ws' // WebSocket URL for HMR
    },
    watchFiles: {
      paths: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.json', 'src/views/*.vue'], // Watch for changes in these files
      options: {
        usePolling: true,
      }
    }
  },

  css: {
    loaderOptions: {
      less: {
        additionalData: `@import '@/variables.less';`
      }
    }
  }
});
