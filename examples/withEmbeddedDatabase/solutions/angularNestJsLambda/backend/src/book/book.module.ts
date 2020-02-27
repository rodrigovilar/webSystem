import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';
import {InMemoryDBModule} from '@nestjs-addons/in-memory-db';

@Module({
  imports: [InMemoryDBModule.forRoot({})],
  providers: [BookResolver],
})
export class BookModule {}
