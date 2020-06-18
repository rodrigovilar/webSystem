import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "",
  port: 5432,
  username: "",
  password: "",
  database: "",
  models: [__dirname + "/models/"],
  modelMatch: (filename, member) => {
    return (
      filename.substring(0, filename.indexOf(".model")) === member.toLowerCase()
    );
  },
});
