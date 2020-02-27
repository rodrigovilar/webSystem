import { Book } from './model/book.entity';

export const booksProviders = [
    {
        provide: 'BOOKS_REPOSITORY',
        useValue: Book,
    },
];
