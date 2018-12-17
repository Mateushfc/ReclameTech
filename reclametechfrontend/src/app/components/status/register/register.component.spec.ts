import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusRegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: StatusRegisterComponent;
  let fixture: ComponentFixture<StatusRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
