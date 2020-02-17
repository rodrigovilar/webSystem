import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { isNullOrUndefined } from 'util';
import { BookService } from '../book.service';
import { showUrl, BOOK_URL, listUrl } from 'src/app/app.urls';
import { Book } from '../book';
import { getParam } from 'src/app/routes.util';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  public editForm: FormGroup;

  public isEditMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: BookService) {

  }

  ngOnInit(): void {
    this.service.clearMessage();
    const id = +getParam(this.route, 'id');
    this.isEditMode = !isNullOrUndefined(id) && id > 0;

    this.initForm();

    if (this.isEditMode) {
      this.loadBook();
    }
  }

  /**
   * Initialize the edit form.
   */
  initForm(): void {
    this.editForm = this.formBuilder.group(this.getFormControls());
  }

  getFormControls(): Object {
    return {
      id: this.formBuilder.control(undefined, []),
      title: this.formBuilder.control(undefined, []),
      author: this.formBuilder.control(undefined, [])
    };
  }

  protected loadBook(): void {
    const id = +getParam(this.route, 'id');
    this.service.getOne(id)
      .subscribe( 
        (book: Book) => {
          const formItem = {};
          Object.keys(this.getFormControls()).forEach(key => {
            formItem[key] = book[key] ? book[key] : null;
          });
          this.editForm.patchValue(formItem);
        }
      );
  }

  /**
   * Invoked when user submits the form.
   *
   * Checks if the form is in edit mode:
   * - No:  Inserts the book.
   * - Yes: Updates the book.
   *
   */
  onSubmit(): void {
    if (this.isEditMode) {
      this.update();
    } else {
      this.insert();
    }
  }

  /**
   * Inserts the book.
   */
  protected insert(): void {
    this.service.add(this.editForm.value)
      .subscribe(
        (book: Book) => {
          this.service.changeMessage(`Book was successfully inserted.`);
          this.router.navigate(showUrl(BOOK_URL, book.id));
        },
        error => {
          this.service.changeMessage(error.error ? error.error.message : error.message);
        }
      );
  }

  /**
   * Updates the book.
   */
  protected update(): void {
    this.service.update(this.editForm.value)
      .subscribe(
        (book: Book) => {
          this.service.changeMessage(`Book was successfully updated.`);
          this.router.navigate(showUrl(BOOK_URL, book.id));
        },
        error => {
          this.service.changeMessage(error.error ? error.error.message : error.message);
        }
      );
  }

  show() {
    this.service.clearMessage();
    this.router.navigate(showUrl(BOOK_URL, +getParam(this.route, 'id')));
    return false;
  }

  back() {
    this.service.clearMessage();
    this.router.navigate(listUrl(BOOK_URL));
    return false;
  }
}
