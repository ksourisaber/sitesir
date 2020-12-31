import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDSINComponent } from './fdsin.component';

describe('FDSINComponent', () => {
  let component: FDSINComponent;
  let fixture: ComponentFixture<FDSINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FDSINComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FDSINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
