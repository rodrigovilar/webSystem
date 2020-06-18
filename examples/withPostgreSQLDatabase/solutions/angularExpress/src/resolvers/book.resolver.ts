import {Arg, Mutation, Query, Resolver} from 'type-graphql';
import {Book} from '../models/book.model';
import {BookInput} from '../inputs/book.input';
import {container} from 'tsyringe';
import {BookService} from '../services/book.service';

@Resolver()
export class BookResolver{

    bookService: BookService;

    constructor() {
        this.bookService = container.resolve(BookService);
    }

    @Query(() => Book)
    async findOneBooks(@Arg("id")id : number): Promise<Book>{
        return this.bookService.getOne(id);
    }

    @Query(() => [Book])
    async findAllBooks(): Promise<Book[]>{
        return this.bookService.getAll();
    }

    @Mutation(() => Book)
    async createBook(@Arg("data") data: BookInput): Promise<Book>{
        return this.bookService.insert(data);
    }

    @Mutation(() => [Number])
    async updateBook(@Arg("id")id: number, @Arg("data") data: BookInput): Promise<number>{
        return this.bookService.update(id, data);
    }

    @Mutation(() => Number)
    async deleteBook(@Arg("id")id: number): Promise<number>{
        return this.bookService.delete(id);
    }

}
