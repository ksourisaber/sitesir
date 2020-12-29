import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisioconfComponent } from './visioconf.component';

describe('VisioconfComponent', () => {
  let component: VisioconfComponent;
  let fixture: ComponentFixture<VisioconfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisioconfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisioconfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
