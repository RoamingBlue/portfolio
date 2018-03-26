import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestCloneComponent } from './pinterest-clone.component';

describe('PinterestCloneComponent', () => {
  let component: PinterestCloneComponent;
  let fixture: ComponentFixture<PinterestCloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinterestCloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinterestCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
