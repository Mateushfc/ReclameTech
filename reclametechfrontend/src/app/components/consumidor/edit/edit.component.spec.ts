import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumidorEditComponent } from './edit.component';

describe('UsuarioEditComponent', () => {
  let component: ConsumidorEditComponent;
  let fixture: ComponentFixture<ConsumidorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumidorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumidorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
