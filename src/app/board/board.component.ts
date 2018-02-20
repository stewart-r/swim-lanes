import { Component, OnInit, Output } from '@angular/core';
import { BoardUpdateService } from './board-update.service';

@Component({
  selector: 'sl-board',
  templateUrl: './board.component.html',
  styleUrls: [
    './board.component.css'
  ]
})
export class BoardComponent implements OnInit {

  constructor(private _boardUpdateService: BoardUpdateService) { }

  get Columns(): string[] {
    return this._columns;
  }

  @Output()
  get CalculatedWidth() {
    return 100.0 / this._columns.length;
  }

  ngOnInit() {
    this._columns = this._boardUpdateService.getColumnHeaders();
  }
  private _columns: string[];

}
