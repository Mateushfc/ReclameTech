import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioDeleteComponent } from './delete.component';

describe('DeleteComponent', () => {
  let component: ComentarioDeleteComponent;
  let fixture: ComponentFixture<ComentarioDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
