const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  .setOutputPath('public/build/')
  .setPublicPath('/build')
  .addEntry('index', './src/index.js')
  .addEntry('photographer', './src/photographer.js')
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  .configureBabel((config) => {
    config.plugins.push('@babel/plugin-proposal-class-properties');
  })
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = 'usage';
    config.corejs = 3;
  })
  .copyFiles([
    {
      from: './src/images',
      to: 'images/[path][name].[ext]'
    },
    {
      from: './src/data',
      to: 'data/[path][name].[ext]'
    }
  ])
  .enableSassLoader();

if (Encore.isProduction()) {
  Encore.setOutputPath('docs/build/');
}

module.exports = Encore.getWebpackConfig();
