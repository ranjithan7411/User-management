import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodupdateComponent } from './foodupdate.component';

describe('FoodupdateComponent', () => {
  let component: FoodupdateComponent;
  let fixture: ComponentFixture<FoodupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
