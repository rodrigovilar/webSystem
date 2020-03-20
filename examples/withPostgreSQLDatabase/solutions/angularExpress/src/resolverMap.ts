import { IResolvers } from 'graphql-tools';
import { bookResolver} from './models/book/book.resolver';

const resolverMap = bookResolver;

export default resolverMap;
