import { InputType, Field, ID} from 'type-graphql';

@InputType()
export class UpdateBookInput {
    @Field(() => ID, {nullable: true})
    readonly id?: number;
    @Field({nullable: true})
    readonly title?: string;
    @Field({nullable: true})
    readonly author?: string;
}
