const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: []
});

module.exports = {
  configureWebpack: {
    watchOptions: {
      poll: 500,       // Check for changes every 500ms
      aggregateTimeout: 300, // Delay before rebuilding after the first change
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 15000,
        maxSize: 250000
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
        additionalData: `@import '@/variables.less';`,
      }
    }
  }
};