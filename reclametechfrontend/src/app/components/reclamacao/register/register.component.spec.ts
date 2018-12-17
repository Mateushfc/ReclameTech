import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamacaoRegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: ReclamacaoRegisterComponent;
  let fixture: ComponentFixture<ReclamacaoRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamacaoRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamacaoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
