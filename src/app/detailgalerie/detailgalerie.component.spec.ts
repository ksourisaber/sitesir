import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailgalerieComponent } from './detailgalerie.component';

describe('DetailgalerieComponent', () => {
  let component: DetailgalerieComponent;
  let fixture: ComponentFixture<DetailgalerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailgalerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailgalerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
