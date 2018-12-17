import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeRegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: CidadeRegisterComponent;
  let fixture: ComponentFixture<CidadeRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadeRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
