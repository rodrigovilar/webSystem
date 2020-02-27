import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookService } from './book.service';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'create',
    component: BookEditComponent
  },
  {
    path: 'edit/:id',
    component: BookEditComponent
  },
  {
    path: 'view/:id',
    component: BookViewComponent
  }
];

@NgModule({
  declarations: [
    BookListComponent,
    BookEditComponent,
    BookViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [
    BookService
  ]
})
export class BookModule { }
