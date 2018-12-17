import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaTipoUsuarioComponent } from './escolha-tipo-usuario.component';

describe('EscolhaTipoUsuarioComponent', () => {
  let component: EscolhaTipoUsuarioComponent;
  let fixture: ComponentFixture<EscolhaTipoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolhaTipoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaTipoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
