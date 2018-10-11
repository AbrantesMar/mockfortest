import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockAdtCreateComponent } from './mock-adt-create.component';

describe('MockAdtCreateComponent', () => {
  let component: MockAdtCreateComponent;
  let fixture: ComponentFixture<MockAdtCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockAdtCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockAdtCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
