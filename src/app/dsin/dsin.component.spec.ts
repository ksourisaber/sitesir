import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSINComponent } from './dsin.component';

describe('DSINComponent', () => {
  let component: DSINComponent;
  let fixture: ComponentFixture<DSINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSINComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DSINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
