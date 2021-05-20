import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdueClearenceDonutComponent } from './overdue-clearence-donut.component';

describe('OverdueClearenceDonutComponent', () => {
  let component: OverdueClearenceDonutComponent;
  let fixture: ComponentFixture<OverdueClearenceDonutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverdueClearenceDonutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdueClearenceDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
