import app from "./app";
import serverless from 'serverless-http';

module.exports.handler = serverless(app);
