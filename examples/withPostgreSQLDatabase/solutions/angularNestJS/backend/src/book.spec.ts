import { Test, TestingModule } from '@nestjs/testing';
import { Book } from './book';

describe('Book', () => {
  let provider: Book;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Book],
    }).compile();

    provider = module.get<Book>(Book);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
