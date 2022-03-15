const Encore = require('@symfony/webpack-encore');
const PurgeCssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

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
  .enableVersioning(Encore.isProduction())
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
  Encore
    .enablePostCssLoader()
    .addPlugin(new PurgeCssPlugin({
      paths: glob.sync([
        path.join(__dirname, 'src/**/*.html'),
      ]),
      defaultExtractor: (content) => {
        return content.match(/[\w-/:]+(?<!:)/g) || [];
      }
    }));
}

module.exports = Encore.getWebpackConfig();
