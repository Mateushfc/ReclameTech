import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamacaoListComponent } from './list.component';

describe('ReclamacaoListComponent', () => {
  let component: ReclamacaoListComponent;
  let fixture: ComponentFixture<ReclamacaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamacaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
