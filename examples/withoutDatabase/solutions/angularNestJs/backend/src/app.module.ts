import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import { MessageResolver } from './message/message.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      typePaths: ['./**/*.graphql'],
    }),
  ],
  providers: [MessageResolver],
})
export class AppModule {}
