import { Book } from './model/book.entity';
export declare class BookService {
    private readonly bookRepository;
    constructor(bookRepository: typeof Book);
    findAll(): Promise<Book[]>;
    find(id: any): Promise<Book>;
    create(data: any): Promise<Book>;
    update(data: any): Promise<Book>;
    delete(id: any): Promise<number>;
}
