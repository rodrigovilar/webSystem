"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const book_entity_1 = require("../book/model/book.entity");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: () => __awaiter(void 0, void 0, void 0, function* () {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'postgres',
                host: 'database-1.ctkucpwgkczg.us-east-1.rds.amazonaws.com',
                port: 5432,
                username: 'postgres',
                password: 'websystem',
                database: 'websystem',
            });
            sequelize.addModels([book_entity_1.Book]);
            yield sequelize.sync();
            return sequelize;
        }),
    },
];
//# sourceMappingURL=database.provider.js.map