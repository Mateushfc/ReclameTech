import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoListComponent } from './list.component';

describe('ListComponent', () => {
  let component: EstadoListComponent;
  let fixture: ComponentFixture<EstadoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
