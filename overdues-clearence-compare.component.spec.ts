import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverduesClearenceCompareComponent } from './overdues-clearence-compare.component';

describe('OverduesClearenceCompareComponent', () => {
  let component: OverduesClearenceCompareComponent;
  let fixture: ComponentFixture<OverduesClearenceCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverduesClearenceCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverduesClearenceCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
