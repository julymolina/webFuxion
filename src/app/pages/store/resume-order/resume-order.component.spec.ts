import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeOrderComponent } from './resume-order.component';

describe('ResumeOrderComponent', () => {
  let component: ResumeOrderComponent;
  let fixture: ComponentFixture<ResumeOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
