import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sl-board',
  template: `
<div class="container-fluid">
  <div class="row" >
    <div [class]="">
    </div>
  </div>
</div>
  `,
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  get Columns(): string[] {
    return [
      'col1',
      'col2'
    ];
  }

  constructor() { }

  ngOnInit() {
  }

}
