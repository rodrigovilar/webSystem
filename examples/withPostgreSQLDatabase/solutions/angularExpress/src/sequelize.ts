import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'ruby.db.elephantsql.com',
    port: 5432,
    username: 'xqvzuvqb',
    password: 'Pr4_VyPwlFNFmWQKZiBE2PlHSMQPnYu-',
    database: 'xqvzuvqb',
    models: [__dirname + '/models/'],
    modelMatch: (filename, member) => {
        return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
    },
});
