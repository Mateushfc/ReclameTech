import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumidorDeleteComponent } from './delete.component';

describe('UsuarioDeleteComponent', () => {
  let component: ConsumidorDeleteComponent;
  let fixture: ComponentFixture<ConsumidorDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumidorDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumidorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
