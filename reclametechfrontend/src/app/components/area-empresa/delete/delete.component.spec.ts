import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaEmpresaDeleteComponent } from './delete.component';

describe('DeleteComponent', () => {
  let component: AreaEmpresaDeleteComponent;
  let fixture: ComponentFixture<AreaEmpresaDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaEmpresaDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaEmpresaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
