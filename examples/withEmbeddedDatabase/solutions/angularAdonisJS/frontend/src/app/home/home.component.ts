import { Component, OnInit } from '@angular/core';
import { listUrl, BOOK_URL } from '../app.urls';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listBooksUrl(): string[] {
    return listUrl(BOOK_URL);
  }

}
