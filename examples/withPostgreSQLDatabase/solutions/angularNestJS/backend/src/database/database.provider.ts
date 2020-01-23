
import { Sequelize } from 'sequelize-typescript';
import { Book } from '../book/model/book.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'postpass',
                database: 'webSystem',
            });
            sequelize.addModels([Book]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
