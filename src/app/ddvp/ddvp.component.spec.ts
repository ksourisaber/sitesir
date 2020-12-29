import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DDVPComponent } from './ddvp.component';

describe('DDVPComponent', () => {
  let component: DDVPComponent;
  let fixture: ComponentFixture<DDVPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DDVPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DDVPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
