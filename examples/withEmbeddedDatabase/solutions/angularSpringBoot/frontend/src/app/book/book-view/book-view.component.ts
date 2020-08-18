import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';
import { listUrl, BOOK_URL, editUrl } from 'src/app/app.urls';
import { getParam } from 'src/app/routes.util';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  book: Book;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: BookService) { 

  }

  ngOnInit() {
    this.loadBook();
  }

  protected loadBook(): void {
    const id = +getParam(this.route, 'id');
    this.service.getOne(id)
      .subscribe( 
        (book: Book) => {
          this.book = book;
        }
      );
  }

  back() {
    this.service.clearMessage();
    this.router.navigate(listUrl(BOOK_URL));
    return false;
  }

  edit() {
    this.service.clearMessage();
    this.router.navigate(editUrl(BOOK_URL, this.book.id));
    return false;
  }
}
