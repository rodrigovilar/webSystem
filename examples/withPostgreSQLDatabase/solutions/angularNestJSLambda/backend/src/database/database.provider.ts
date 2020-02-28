
import { Sequelize } from 'sequelize-typescript';
import { Book } from '../book/model/book.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'database-1.ctkucpwgkczg.us-east-1.rds.amazonaws.com',
                port: 5432,
                username: 'postgres',
                password: 'websystem',
                database: 'websystem',
            });
            sequelize.addModels([Book]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
