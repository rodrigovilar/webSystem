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

  async update(id: number, data: BookInput): Promise<number> {
    return Book.update(data, { where: { id } }).then((result) => {
      return result[0];
    });
  }

  async delete(id: number): Promise<number> {
    return Book.destroy({ where: { id } });
  }
}
