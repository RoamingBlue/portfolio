import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTradingComponent } from './book-trading.component';

describe('BookTradingComponent', () => {
  let component: BookTradingComponent;
  let fixture: ComponentFixture<BookTradingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTradingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
