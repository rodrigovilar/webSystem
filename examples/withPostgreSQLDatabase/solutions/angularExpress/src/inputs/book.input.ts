import { Book } from "../models/book.model";
import { Field, InputType } from "type-graphql";
import { RecursivePartial } from "sequelize-typescript/dist/shared/types";

@InputType()
export class BookInput implements RecursivePartial<Book> {
  @Field()
  title: string;

  @Field()
  author: string;
}
