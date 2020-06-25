// config/index.js

const dbUser = `yourUsername`;
const dbPassword = `yourPassword`;

const MONGODB_URI = `mongodb://${dbUser}:${dbPassword}@ds000000.mlab.com:00000/your-project`;

module.exports = MONGODB_URI;

