import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrunexComponent } from './prunex.component';

describe('PrunexComponent', () => {
  let component: PrunexComponent;
  let fixture: ComponentFixture<PrunexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrunexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrunexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
