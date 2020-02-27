import { InputType, Field} from 'type-graphql';

@InputType()
export class CreateBookInput {
    @Field({nullable: true})
    readonly title: string;
    @Field({nullable: true})
    readonly author: string;
}
