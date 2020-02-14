"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_entity_1 = require("./model/book.entity");
exports.booksProviders = [
    {
        provide: 'BOOKS_REPOSITORY',
        useValue: book_entity_1.Book,
    },
];
//# sourceMappingURL=book.providers.js.map