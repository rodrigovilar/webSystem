import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'database-1.ctkucpwgkczg.us-east-1.rds.amazonaws.com',
    port: 5432,
    username: 'postgres',
    password: 'websystem',
    database: 'websystem',
});
