import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverduesComponent } from './overdues.component';

describe('OverduesComponent', () => {
  let component: OverduesComponent;
  let fixture: ComponentFixture<OverduesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverduesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverduesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
