import { InputType, Field} from 'type-graphql';

@InputType()
export class CreateBookInput {
    @Field()
    readonly title: string;
    @Field()
    readonly author: string;
}
