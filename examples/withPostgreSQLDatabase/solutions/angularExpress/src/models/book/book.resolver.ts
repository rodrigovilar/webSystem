import {IResolvers} from 'graphql-tools';
import { Book } from './model/book.entity'
import { BookService } from './book.service';


export const bookResolver: IResolvers = {
    Query: {
        getAllBooks(_: void, args: void): Promise<Book[]> {
            return Book.findAll();
        },

        getOneBook(parent, args): Promise<Book> {
            return Book.findOne({where: {id: args.id}});
        },
    },

    Mutation: {
        createBook(parent, args): Promise<Book>{
            return Book.create(args.input);
        },

        updateBook(parent, args): Promise<[number, Book[]]>{
            return Book.update(args.input, { where: {id: args.id}});
        },

        destroyBook(parent, args): Promise<number>{
            return Book.destroy({where: {id: args.id}});
        }
    }
}

