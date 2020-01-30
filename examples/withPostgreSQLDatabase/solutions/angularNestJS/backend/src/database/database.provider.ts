
import { Sequelize } from 'sequelize-typescript';
import { Book } from '../book/model/book.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'database',
                port: 5432,
                username: 'postgres',
                password: 'postpass',
                database: 'websystem',
            });
            sequelize.addModels([Book]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
