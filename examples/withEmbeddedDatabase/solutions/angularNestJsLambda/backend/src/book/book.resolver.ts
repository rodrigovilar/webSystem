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
    async getAll(): Promise<BookType[]> {
        return this.bookService.getAll();
    }

    @Query(() => BookType)
    async getOne(@Args('id') id: number) {
        return this.bookService.get(id);
    }

    @Mutation(() => BookType)
    async createItem(@Args('input') input: CreateBookInput): Promise<CreateBookInput> {
        return this.bookService.create(input);
    }

    @Mutation(() => BookType)
    async updateItem(
        @Args('input') input: UpdateBookInput,
    ) {
        this.bookService.update(input);
        return input;
    }

    @Mutation(() => BookType)
    async deleteItem(@Args('id') id: number): Promise<UpdateBookInput> {
        const book = this.bookService.get(id);
        this.bookService.delete(id);
        return book;
    }

    @Query(() => String)
    async hello() {
        return 'hello';
    }
}
