import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDSCComponent } from './fdsc.component';

describe('FDSCComponent', () => {
  let component: FDSCComponent;
  let fixture: ComponentFixture<FDSCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FDSCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FDSCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
