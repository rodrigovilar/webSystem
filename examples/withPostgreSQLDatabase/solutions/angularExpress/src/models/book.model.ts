import {Column, DataType, Model, Table} from 'sequelize-typescript';
import {Field, ID, ObjectType} from 'type-graphql';


@Table
@ObjectType({ description: "The Book model" })
export class Book extends Model<Book>{

    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    @Field(() => ID)
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    @Field(() => String, {nullable: false})
    title: string;


    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    @Field(() => String,  {nullable: false})
    author: string;

}
