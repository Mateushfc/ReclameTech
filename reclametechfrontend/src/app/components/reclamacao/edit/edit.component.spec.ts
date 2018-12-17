import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamacaoEditComponent } from './edit.component';

describe('ReclamacaoEditComponent', () => {
  let component: ReclamacaoEditComponent;
  let fixture: ComponentFixture<ReclamacaoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamacaoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamacaoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
