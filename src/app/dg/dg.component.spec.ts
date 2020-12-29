import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DGComponent } from './dg.component';

describe('DGComponent', () => {
  let component: DGComponent;
  let fixture: ComponentFixture<DGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
