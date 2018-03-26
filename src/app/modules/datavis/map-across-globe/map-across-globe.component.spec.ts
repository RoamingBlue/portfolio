import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAcrossGlobeComponent } from './map-across-globe.component';

describe('MapAcrossGlobeComponent', () => {
  let component: MapAcrossGlobeComponent;
  let fixture: ComponentFixture<MapAcrossGlobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAcrossGlobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAcrossGlobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
