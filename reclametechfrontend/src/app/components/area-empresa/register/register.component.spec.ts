import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaEmpresaRegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: AreaEmpresaRegisterComponent;
  let fixture: ComponentFixture<AreaEmpresaRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaEmpresaRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaEmpresaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
