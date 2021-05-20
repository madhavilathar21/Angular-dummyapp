import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCompareComponent } from './payment-compare.component';

describe('PaymentCompareComponent', () => {
  let component: PaymentCompareComponent;
  let fixture: ComponentFixture<PaymentCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
