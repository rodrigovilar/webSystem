import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private apollo: Apollo) { }

  public getMessage(): any {
    return this.apollo
    .watchQuery({
        query: gql`
            {
                getMessages {
                    id,
                    content
                }
            }
        `,
    });
  }
}
