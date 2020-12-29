import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCGComponent } from './dcg.component';

describe('DCGComponent', () => {
  let component: DCGComponent;
  let fixture: ComponentFixture<DCGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DCGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DCGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
