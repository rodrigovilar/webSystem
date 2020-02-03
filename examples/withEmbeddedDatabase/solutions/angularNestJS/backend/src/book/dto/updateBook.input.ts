import { InputType, Field, ID} from 'type-graphql';

@InputType()
export class UpdateBookInput {
    @Field(() => ID)
    readonly id: number;
    @Field()
    readonly title: string;
    @Field()
    readonly author: string;
}
