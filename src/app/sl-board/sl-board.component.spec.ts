import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlBoardComponent } from './sl-board.component';

describe('SlBoardComponent', () => {
  let component: SlBoardComponent;
  let fixture: ComponentFixture<SlBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
