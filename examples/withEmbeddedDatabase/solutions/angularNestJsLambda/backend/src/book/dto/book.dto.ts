import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class BookType {
    @Field(() => ID)
    readonly id?: number;
    @Field()
    readonly title: string;
    @Field()
    readonly author: string;
}
