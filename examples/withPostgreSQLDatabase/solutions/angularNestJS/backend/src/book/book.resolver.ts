import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import { Book } from './model/book.entity';
import { BookType } from './dto/book.dto';
import { CreateBookInput } from './input/createBook.input';
import { UpdateBookInput } from './input/updateBook.input';
import { BookService } from './book.service';

@Resolver('Book')
export class BookResolver {
    constructor(private readonly bookService: BookService) {}

    @Query(() => [BookType])
    async getBooks(): Promise<BookType[]> {
        return await this.bookService.findAll();
    }

    @Query(() => BookType)
    async getBook(@Args('id') id: number) {
        return await this.bookService.find(id);
    }

    @Mutation(() => BookType)
    async createBook(@Args('input') input: CreateBookInput): Promise<Book> {
        const book = new Book();
        book.author = input.author;
        book.title = input.title;
        return await this.bookService.create(book);
    }

    @Mutation(() => BookType)
    async updateBook(
        @Args('input') input: UpdateBookInput): Promise<Book> {
        return await this.bookService.update(input);
    }

    @Mutation(() => BookType)
    async deleteBook(@Args('id') id: number): Promise<number> {
        return await this.bookService.delete(id);
    }
}
