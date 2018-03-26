import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoguelikeDungeonComponent } from './roguelike-dungeon.component';

describe('RoguelikeDungeonComponent', () => {
  let component: RoguelikeDungeonComponent;
  let fixture: ComponentFixture<RoguelikeDungeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoguelikeDungeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoguelikeDungeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
