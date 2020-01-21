import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {InMemoryDBModule} from '@nestjs-addons/in-memory-db';
import {GraphQLModule} from '@nestjs/graphql';
import {BookModule} from './book/book.module';

@Module({
  imports: [GraphQLModule.forRoot({
              autoSchemaFile: 'schema.gql',
              playground: true,
              debug: false,
            }),
            BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
