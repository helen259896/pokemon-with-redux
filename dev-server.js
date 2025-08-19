// A work around using environment variables via .env file
// Thanks to this github comment

// For development

// Create a script for your dev environment in the project root e.g. dev-server.js
// dev-server.js
// require('dotenv').config(); // require dotenv
const cli = require('next/dist/cli/next-dev');

// cli.nextDev(['-p', process.env.PORT || 8000]);
// cli.nextDev(['-p',  8000]);