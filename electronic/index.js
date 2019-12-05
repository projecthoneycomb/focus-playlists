require('dotenv').config()
const PlaylistStream = require('@projecthoneycomb/focus-core');

const stream = new PlaylistStream('electronic');
stream.initialise().then(() => stream.start() )