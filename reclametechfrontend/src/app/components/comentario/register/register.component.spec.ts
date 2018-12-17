import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioRegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: ComentarioRegisterComponent;
  let fixture: ComponentFixture<ComentarioRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
