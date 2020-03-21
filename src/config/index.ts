require('dotenv').config();

import convict from 'convict';
import schema from './schema';

const config = convict(schema);

export default config;
