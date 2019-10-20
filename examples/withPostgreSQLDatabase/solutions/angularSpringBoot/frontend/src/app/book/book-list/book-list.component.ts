import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';
import { showUrl, BOOK_URL, editUrl, createUrl } from 'src/app/app.urls';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(
    private router: Router,
    private service: BookService) {
  }

  ngOnInit() {
    this.list(true);
  }

  list(clearMessage: boolean) {
    this.service.getAll().subscribe( 
      (books: Book[]) => {
        this.books = books;
        if (clearMessage) {
          this.service.clearMessage();
        }
      },
      (error) => {
        if (clearMessage) {
          this.service.clearMessage();
        }
      });
  }

  show(id: number) {
    this.service.clearMessage();
    this.router.navigate(showUrl(BOOK_URL, id));
    return false;
  }

  edit(id: number) {
    this.service.clearMessage();
    this.router.navigate(editUrl(BOOK_URL, id));
    return false;
  }

  newBook() {
    this.service.clearMessage();
    this.router.navigate(this.newBookUrl());
    return false;
  }

  destroy(id: number) {
    if (confirm('Are you sure?')) {
      this.service.delete(id).subscribe(
        data => {
          this.service.changeMessage(`Book was successfully destroyed.`);
          this.list(false);
        }
      );
    }
    return false;
  }

  newBookUrl() : string[] {
    return createUrl(BOOK_URL);
  }

}
