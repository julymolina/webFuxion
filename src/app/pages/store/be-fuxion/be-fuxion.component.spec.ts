import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeFuxionComponent } from './be-fuxion.component';

describe('BeFuxionComponent', () => {
  let component: BeFuxionComponent;
  let fixture: ComponentFixture<BeFuxionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeFuxionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeFuxionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
