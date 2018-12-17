import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoDeleteComponent } from './delete.component';

describe('EstadoDeleteComponent', () => {
  let component: EstadoDeleteComponent;
  let fixture: ComponentFixture<EstadoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
