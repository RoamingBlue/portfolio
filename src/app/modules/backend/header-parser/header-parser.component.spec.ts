import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderParserComponent } from './header-parser.component';

describe('HeaderParserComponent', () => {
  let component: HeaderParserComponent;
  let fixture: ComponentFixture<HeaderParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
