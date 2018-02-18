import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sl-board',
  templateUrl: './board.component.html',
  styleUrls: [
    './board.component.css'
  ]
})
export class BoardComponent implements OnInit {

  constructor() { }

  get Columns(): string[] {
    return this._columns;
  }

  @Output()
  get ClassName() {
    return `col-xs-${ Math.floor(12 / this._columns.length) }`;
  }

  ngOnInit() {
    this._columns = [
      'col1',
      'col2',
      'col3',
      'col4',
      'col5',
    ];
  }
  private _columns: string[];

}
