import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaRegisterComponent } from './register.component';

describe('EmpresaRegisterComponent', () => {
  let component: EmpresaRegisterComponent;
  let fixture: ComponentFixture<EmpresaRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
