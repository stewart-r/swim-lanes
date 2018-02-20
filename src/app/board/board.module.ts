import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardUpdateService } from './board-update.service';
import { ColumnComponent } from './column/column.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BoardComponent, ColumnComponent],
  exports: [
    BoardComponent
  ],
  providers: [ BoardUpdateService ]
})
export class BoardModule { }
