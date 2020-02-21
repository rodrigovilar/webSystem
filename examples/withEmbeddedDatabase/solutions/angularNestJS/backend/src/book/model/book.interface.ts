import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface BookEntity extends InMemoryDBEntity {
    id: number;
    title: string;
    author: string;
}
