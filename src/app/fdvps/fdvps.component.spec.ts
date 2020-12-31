import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDVPSComponent } from './fdvps.component';

describe('FDVPSComponent', () => {
  let component: FDVPSComponent;
  let fixture: ComponentFixture<FDVPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FDVPSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FDVPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
