import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorsDonutComponent } from './creditors-donut.component';

describe('CreditorsDonutComponent', () => {
  let component: CreditorsDonutComponent;
  let fixture: ComponentFixture<CreditorsDonutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorsDonutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorsDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
