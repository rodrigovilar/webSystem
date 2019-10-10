import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from './book';
import { Observable } from 'rxjs';
import { BACK_URL, BOOK_SLASH_URL } from '../app.urls';
import { AppService } from '../app.service';

let SERVICE_URL = BACK_URL + BOOK_SLASH_URL;

@Injectable()
export class BookService {

  constructor(
    private http: HttpClient,
    private appService: AppService
    ) { }

  /**
   * HTTP Method GET.
   *
   * @returns {Observable<Book[]>}
   */
  getAll(): Observable<Book[]> {
    return this.http.get(SERVICE_URL) as Observable<Book[]>;
  }

  /**
   * Gets one item by its ID.
   *
   * @param {any} id
   * @returns {Observable<Book>}
   */
  getOne(id: number): Observable<Book> {
    return this.http.get(SERVICE_URL + id) as Observable<Book>;
  }

  /**
   * HTTP Method POST.
   *
   * @param {Book} book
   * @returns {Observable<ObjeBookct>}
   */
  add(book: Book): Observable<Book> {
    return this.http.post(SERVICE_URL, book) as Observable<Book>;
  }

  /**
   * HTTP Method PUT.
   *
   * @param {Book} book
   * @returns {Observable<Book>}
   */
  update(book: Book): Observable<Book> {
    return this.http.put(SERVICE_URL + book.id, book) as Observable<Book>;
  }

  /**
   * HTTP Method DELETE.
   *
   * @returns {Observable<Object>}
   */
  delete(id: number): Observable<Book> {
    return this.http.delete(SERVICE_URL + id) as Observable<Book>;
  }

  changeMessage(message: string) {
    this.appService.changeMessage(message);
  }

  clearMessage() {
    this.appService.clearMessage();
  }
}
