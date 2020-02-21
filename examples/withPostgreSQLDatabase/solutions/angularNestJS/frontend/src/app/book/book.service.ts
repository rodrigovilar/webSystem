import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from './book';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {ApolloQueryResult} from 'apollo-client';
import {FetchResult} from 'apollo-link';

const allBooksQuery = gql`
query{
  getBooks {
    id
    title
    author
  }
}
`;

const getOneQuery = gql`query getBookById($bookId: Float!){
  getBook(id: $bookId) {
    id
    title
    author
  }
}`;

const updateItemQuery = gql`mutation updateItem($id: ID!, $title: String!, $author: String!){
  updateBook(input: {id: $id, title: $title, author: $author}){
    id,
    title,
    author  
  }
}`;

const addItemQuery = gql`mutation createItem($title: String!, $author: String!){
  createBook(input: {title: $title, author: $author}){
    id
    title
    author
  }
}`;

const deleteItemQuery = gql`mutation deleteItem($id: Float!){
  deleteBook(id: $id)
  {
    id
  }
}`

@Injectable()
export class BookService {

  constructor(
    private http: HttpClient,
    private appService: AppService,
    private apollo: Apollo,
  ) { }

  /**
   * HTTP Method GET.
   *
   * @returns {Observable<ApolloQueryResult<Book[]>>}
   */
  getAll(): Observable<ApolloQueryResult<Book[]>> {
    return this.apollo
      .watchQuery<Book[]>({query: allBooksQuery}).valueChanges;
  }

  /**
   * Gets one item by its ID.
   *
   * @param {any} id
   * @returns {Observable<Book>}
   */
  getOne(id: number): Observable<ApolloQueryResult<Book>> {
    return this.apollo
      .query<Book>({query: getOneQuery, variables: {
        bookId : id,
        }});
  }

  /**
   * HTTP Method POST.
   *
   * @param {Book} book
   * @returns {Observable<ObjeBookct>}
   */
  add(book: Book): Observable<FetchResult<Book>> {
    const variables = {};
    Object.keys(book).forEach(key => {
      variables[key] = book[key];
    })
    return this.apollo.mutate<Book>({
      mutation: addItemQuery,
      variables
    });
  }

  /**
   * HTTP Method PUT.
   *
   * @param {Book} book
   * @returns {Observable<Book>}
   */
  update(book: Book): Observable<FetchResult<Book>> {
    const variables = {};
    Object.keys(book).forEach(key => {
      variables[key] = book[key];
    })
    return this.apollo.mutate<Book>({
      mutation: updateItemQuery,
      variables
    });
  }

  /**
   * HTTP Method DELETE.
   *
   * @returns {Observable<Object>}
   */
  delete(bookId): Observable<FetchResult<Book>> {
    console.log(bookId);
    return this.apollo.mutate<Book>({
      mutation: deleteItemQuery,
      variables: { id: parseFloat(bookId) }
    });
  }

  changeMessage(message: string) {
    this.appService.changeMessage(message);
  }

  clearMessage() {
    this.appService.clearMessage();
  }
}
