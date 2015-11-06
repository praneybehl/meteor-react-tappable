Package.describe({
  name: 'praneybehl:react-tappable',
  version: '0.7.1',
  summary: 'Tappable component for native tap event handling packaged for Meteor',
  git: 'https://github.com/praneybehl/meteor-react-tappable',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('react@0.1.13');
  api.use('cosmos:browserify@0.8.3', 'client');
  api.addFiles('package.browserify.js', 'client');
  api.addFiles('package.browserify.options.json', 'client');
  api.export('Tappable');
});


Npm.depends({
  "react-tappable": "0.7.1",
  "exposify": "0.5.0"
});
