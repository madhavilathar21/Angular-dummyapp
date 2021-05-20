import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRejectionCompareComponent } from './payment-rejection-compare.component';

describe('PaymentRejectionCompareComponent', () => {
  let component: PaymentRejectionCompareComponent;
  let fixture: ComponentFixture<PaymentRejectionCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentRejectionCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRejectionCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
