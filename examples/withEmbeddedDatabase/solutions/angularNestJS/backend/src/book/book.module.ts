import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import {InMemoryDBModule} from "@nestjs-addons/in-memory-db";

@Module({
  imports: [InMemoryDBModule.forRoot({})],
  providers: [BookService, BookResolver],
})
export class BookModule {}
