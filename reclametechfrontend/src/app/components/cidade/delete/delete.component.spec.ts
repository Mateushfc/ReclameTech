import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeDeleteComponent } from './delete.component';

describe('DeleteComponent', () => {
  let component: CidadeDeleteComponent;
  let fixture: ComponentFixture<CidadeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
