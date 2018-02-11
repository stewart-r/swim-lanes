import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { SlBoardComponent } from './sl-board/sl-board.component';

@NgModule({
  declarations: [
    AppComponent,
    SlBoardComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
