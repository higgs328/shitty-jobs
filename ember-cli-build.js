'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-bootstrap': {
      bootstrapVersion: 5,
      importBootstrapCSS: true,
    },
    sassOptions: {
      includePaths: ['app/styles'],
      extension: 'scss',
    },
  });

  return app.toTree();
};
