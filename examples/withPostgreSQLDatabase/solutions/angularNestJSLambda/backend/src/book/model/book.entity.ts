import {Column, DataType, Model, Table} from 'sequelize-typescript';

@Table
export class Book extends Model<Book> {

    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    id: number;

    @Column
    title: string;

    @Column
    author: string;
}
