import { Module } from '@nestjs/common';
import { BookModule } from './book.module';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import {booksProviders} from './book.providers';

@Module({
    imports: [BookModule],
    providers: [BookService, BookResolver, ...booksProviders],
})
export class BookHttpModule {}
