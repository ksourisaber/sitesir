import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DREMComponent } from './drem.component';

describe('DREMComponent', () => {
  let component: DREMComponent;
  let fixture: ComponentFixture<DREMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DREMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DREMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
