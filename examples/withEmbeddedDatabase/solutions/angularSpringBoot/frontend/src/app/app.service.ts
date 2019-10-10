import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppService {

  private messageChangedSource = new Subject<string>();
  public messageChanged$ = this.messageChangedSource.asObservable();

  constructor() {}

  changeMessage(message: string) {
    this.messageChangedSource.next(message);
  }

  clearMessage() {
    this.messageChangedSource.next(null);
  }
}
