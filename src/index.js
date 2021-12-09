const log = require('./utils/log');
global.log = log; // Make log global for easy usage everywhere

const package = require('./package.json');

log('Init', 'OpenAsar v' + package.version);

const appSettings = require('./appSettings');
global.oaConfig = appSettings.getSettings().get('openasar', {});

log('Init', 'Loaded config', oaConfig);

const bootstrap = require('./bootstrap');

bootstrap(); // Start bootstrap