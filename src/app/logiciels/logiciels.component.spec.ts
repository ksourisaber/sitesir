import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicielsComponent } from './logiciels.component';

describe('LogicielsComponent', () => {
  let component: LogicielsComponent;
  let fixture: ComponentFixture<LogicielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicielsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
