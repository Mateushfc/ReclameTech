import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumidorRegisterComponent } from './register.component';

describe('ConsumidorRegisterComponent', () => {
  let component: ConsumidorRegisterComponent;
  let fixture: ComponentFixture<ConsumidorRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumidorRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumidorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
