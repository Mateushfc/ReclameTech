import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeEditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: CidadeEditComponent;
  let fixture: ComponentFixture<CidadeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
