import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaEmpresaEditComponent } from './edit.component';

describe('AreaEmpresaEditComponent', () => {
  let component: AreaEmpresaEditComponent;
  let fixture: ComponentFixture<AreaEmpresaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaEmpresaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaEmpresaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
