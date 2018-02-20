import { Injectable } from '@angular/core';

@Injectable()
export class BoardUpdateService {

  constructor() { }

  getCardsForColumn(columnHeader: string) {
    return [
      'bug 1',
      'Pbi 2',
      'Pbi 2',
      'Pbi 2',
      'Pbi 2',
    ];
  }

  getColumnHeaders() {
    return [
      'To do',
      'In progress',
      'Testing',
      'Done'
    ];
  }

}
