import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DREVComponent } from './drev.component';

describe('DREVComponent', () => {
  let component: DREVComponent;
  let fixture: ComponentFixture<DREVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DREVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DREVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
