import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {BookModule} from './book/book.module';

@Module({
  imports: [GraphQLModule.forRoot({
              autoSchemaFile: 'schema.gql',
              playground: true,
              debug: false,
            }),
            BookModule],
})
export class AppModule {}
