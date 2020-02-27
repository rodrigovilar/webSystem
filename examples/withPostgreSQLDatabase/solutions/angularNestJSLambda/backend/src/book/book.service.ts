import {Inject, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Book} from './model/book.entity';
import {DeleteResult, InsertResult, Repository, UpdateResult} from 'typeorm';

@Injectable()
export class BookService {
    constructor(@Inject('BOOKS_REPOSITORY') private readonly bookRepository: typeof Book) {}

    findAll(): Promise<Book[]> {
        return this.bookRepository.findAll<Book>();
    }

    find(id): Promise<Book> {
       return this.bookRepository.findOne({where: {id}});
    }

    create(data): Promise<Book> {
        return data.save();
    }

    update(data): Promise<Book> {
        this.bookRepository.update<Book>(data, { where: {id: data.id}});
        return this.bookRepository.findOne({where: {id: data.id}});
    }

    delete(id): Promise<number> {
        return this.bookRepository.destroy({where: {id} });
    }
}
