import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepostaReclamacaoComponent } from './reposta-reclamacao.component';

describe('RepostaReclamacaoComponent', () => {
  let component: RepostaReclamacaoComponent;
  let fixture: ComponentFixture<RepostaReclamacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepostaReclamacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepostaReclamacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
