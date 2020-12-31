import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdgComponent } from './fdg.component';

describe('FdgComponent', () => {
  let component: FdgComponent;
  let fixture: ComponentFixture<FdgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
