import { Injectable } from '@angular/core';

@Injectable()
export class BoardUpdateService {

  constructor() { }

  getColumnHeaders() {
    return [
      'col1',
      'col2',
      'col3',
      'col4',
      'col5',
      'col1',
      'col2',
      'col3',
      'col4',
      'col5',
    ];
  }

}