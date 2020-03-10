import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class BookType {
    @Field(() => ID, {nullable: true})
    readonly id: number;
    @Field({nullable: true})
    readonly title: string;
    @Field({nullable: true})
    readonly author: string;
}
