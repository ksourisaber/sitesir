import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAAFComponent } from './daaf.component';

describe('DAAFComponent', () => {
  let component: DAAFComponent;
  let fixture: ComponentFixture<DAAFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAAFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DAAFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
