require('dotenv').config()
const PlaylistStream = require('@projecthoneycomb/focus-core');

const stream = new PlaylistStream('lofi');
stream.initialise().then(() => stream.start() )