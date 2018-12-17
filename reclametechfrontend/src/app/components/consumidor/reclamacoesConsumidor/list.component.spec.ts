import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumidorListComponent } from './list.component';

describe('ConsumidorListComponent', () => {
  let component: ConsumidorListComponent;
  let fixture: ComponentFixture<ConsumidorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumidorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumidorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
