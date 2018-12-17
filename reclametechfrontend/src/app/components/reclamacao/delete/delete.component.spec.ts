import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamacaoDeleteComponent } from './delete.component';

describe('ReclamacaoDeleteComponent', () => {
  let component: ReclamacaoDeleteComponent;
  let fixture: ComponentFixture<ReclamacaoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamacaoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamacaoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
