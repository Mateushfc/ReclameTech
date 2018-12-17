import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaEmpresaListComponent } from './list.component';

describe('ListComponent', () => {
  let component: AreaEmpresaListComponent;
  let fixture: ComponentFixture<AreaEmpresaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaEmpresaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaEmpresaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
