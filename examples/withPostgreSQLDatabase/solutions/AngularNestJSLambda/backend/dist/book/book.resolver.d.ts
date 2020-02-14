import { BookType } from './dto/book.dto';
import { BookService } from './book.service';
export declare class BookResolver {
    private readonly bookService;
    constructor(bookService: BookService);
    getAll(): Promise<BookType[]>;
}
