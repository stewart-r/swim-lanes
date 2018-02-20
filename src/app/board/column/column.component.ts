import { Component, OnInit, Input, Output } from '@angular/core';

import { BoardUpdateService } from '../board-update.service';

@Component({
  selector: 'sl-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input()
  columnHeader: string;

  @Output()
  cardIds: string[];

  constructor(private _boardUpdateService: BoardUpdateService) { }

  ngOnInit() {
    this.cardIds = this._boardUpdateService.getCardIdsForColumn(this.columnHeader);
  }

}
