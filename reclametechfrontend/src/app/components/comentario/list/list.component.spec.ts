import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ComentarioListComponent;
  let fixture: ComponentFixture<ComentarioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
