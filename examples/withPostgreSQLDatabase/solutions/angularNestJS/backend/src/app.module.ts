import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {BookHttpModule} from './book/book-http.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [GraphQLModule.forRoot({
              autoSchemaFile: 'schema.gql',
              playground: true,
              debug: false,
            }),
            BookHttpModule,
            DatabaseModule],
})
export class AppModule {}
