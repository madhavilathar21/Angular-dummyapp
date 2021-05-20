import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvtarBoxComponent } from './avtar-box.component';

describe('AvtarBoxComponent', () => {
  let component: AvtarBoxComponent;
  let fixture: ComponentFixture<AvtarBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvtarBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvtarBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
