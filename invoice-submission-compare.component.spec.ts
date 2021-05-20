import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSubmissionCompareComponent } from './invoice-submission-compare.component';

describe('InvoiceSubmissionCompareComponent', () => {
  let component: InvoiceSubmissionCompareComponent;
  let fixture: ComponentFixture<InvoiceSubmissionCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceSubmissionCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceSubmissionCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
