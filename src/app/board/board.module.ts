import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardUpdateService } from './board-update.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BoardComponent],
  exports: [
    BoardComponent
  ],
  providers: [ BoardUpdateService ]
})
export class BoardModule { }
