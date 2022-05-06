import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Photo2Component } from './photo2.component';

describe('Photo2Component', () => {
  let component: Photo2Component;
  let fixture: ComponentFixture<Photo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Photo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Photo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
