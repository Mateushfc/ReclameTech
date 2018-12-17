import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoRegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: EstadoRegisterComponent;
  let fixture: ComponentFixture<EstadoRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
