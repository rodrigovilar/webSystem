import app from './app';
import serverless from 'serverless-http';

exports.handler = serverless(app);
