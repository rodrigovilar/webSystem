import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('Message')
export class MessageResolver {
    messages = [{
        id: 1,
        content: 'Example project 1',
    }];

    @Query()
    getMessages() {
        return this.messages;
    }

    @Query('message')
    async findOneById(
        @Args('id', ParseIntPipe)
            id: number,
    ): Promise<any> {
        return this.messages.find(c => c.id === id);
    }

}
