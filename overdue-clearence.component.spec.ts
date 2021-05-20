import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdueClearenceComponent } from './overdue-clearence.component';

describe('OverdueClearenceComponent', () => {
  let component: OverdueClearenceComponent;
  let fixture: ComponentFixture<OverdueClearenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverdueClearenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdueClearenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
