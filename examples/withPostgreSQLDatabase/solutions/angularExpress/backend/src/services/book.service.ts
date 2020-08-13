import { injectable } from "tsyringe";
import { Book } from "../models/book.model";
import { BookInput } from "../inputs/book.input";

@injectable()
export class BookService {
  async getAll(): Promise<Book[]> {
    return Book.findAll();
  }

  async getOne(id: number): Promise<Book> {
    return Book.findOne({ where: { id } });
  }

  async insert(data: BookInput): Promise<Book> {
    return Book.create(data);
  }

  async update(id: number, data: BookInput): Promise<Book> {
    Book.update(data, { where: { id } });
    return this.getOne(id);
  }

  async delete(id: number): Promise<number> {
    return Book.destroy({ where: { id } });
  }
}
