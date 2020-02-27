import { Model } from 'sequelize-typescript';
export declare class Book extends Model<Book> {
    id: number;
    title: string;
    author: string;
}
