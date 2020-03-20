import {Book} from './model/book.entity';

export class BookService {

    bookRepository = Book;

    findAll(): Promise<Book[]> {
        return this.bookRepository.findAll<Book>();
    }

    find(id: any): Promise<Book> {
        return this.bookRepository.findOne({where: {id}});
    }

    create(data: any): Promise<Book> {
        return data.save();
    }

    update(data: any): Promise<Book> {
        this.bookRepository.update<Book>(data, { where: {id: data.id}});
        return this.bookRepository.findOne({where: {id: data.id}});
    }

    delete(id: any): Promise<number> {
        return this.bookRepository.destroy({where: {id} });
    }
}
