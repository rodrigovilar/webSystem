import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import { InMemoryDBService} from '@nestjs-addons/in-memory-db';
import { BookEntity } from './model/book.interface';
import { BookType } from './dto/book.dto';
import { CreateBookInput } from './dto/createBook.input';
import { UpdateBookInput } from './dto/updateBook.input';

@Resolver('Book')
export class BookResolver {
    constructor(private readonly bookService: InMemoryDBService<BookEntity>) {}

    @Query(() => [BookType])
    async getBooks(): Promise<BookType[]> {
        return this.bookService.getAll();
    }

    @Query(() => BookType)
    async getBook(@Args('id') id: number) {
        return this.bookService.get(id);
    }

    @Mutation(() => BookType)
    async createBook(@Args('input') input: CreateBookInput): Promise<CreateBookInput> {
        return this.bookService.create(input);
    }

    @Mutation(() => BookType)
    async updateBook(
        @Args('input') input: UpdateBookInput,
    ) {
        this.bookService.update(input);
        return input;
    }

    @Mutation(() => BookType)
    async deleteBook(@Args('id') id: number): Promise<UpdateBookInput> {
        const book = this.bookService.get(id);
        this.bookService.delete(id);
        return book;
    }
}
