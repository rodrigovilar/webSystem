import { Sequelize } from "sequelize-typescript";
require('dotenv').config();

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  models: [__dirname + "/models/"],
  modelMatch: (filename, member) => {
    return (
        filename.substring(0, filename.indexOf(".model")) === member.toLowerCase()
    );
  },
});
