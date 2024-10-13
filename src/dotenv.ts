import * as dotenv from 'dotenv';

// Only import Node.js core modules if the environment is Node.js
let fs, path, process;

if (typeof window === 'undefined') {
  fs = require('fs');
  path = require('path');
  process = require('process');
} else {
  console.log("Running in the browser; 'fs', 'path', and 'process' are not available.");
}

// Load .env.defaults first
dotenv.config({ path: path.resolve(__dirname, '../.env.default') });

// Load the environment-specific .env.$ENV file if it exists
export const { NODE_ENV } = process.env;
const envFilePath = path.resolve(__dirname, `../.env.${NODE_ENV}`);
if (fs.existsSync(envFilePath)) {
  dotenv.config({ path: envFilePath });
}

// Finally, load .env (non-version controlled)
dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const {
  JEST_TEST_IN_TEST,
  JEST_TEST_VARIABLE,
} = process.env;
