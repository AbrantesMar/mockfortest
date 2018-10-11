import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockAdtComponent } from './mock-adt.component';

describe('MockAdtComponent', () => {
  let component: MockAdtComponent;
  let fixture: ComponentFixture<MockAdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockAdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockAdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
