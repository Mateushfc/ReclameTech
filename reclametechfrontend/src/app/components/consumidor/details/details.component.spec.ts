import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumidorDetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: ConsumidorDetailsComponent;
  let fixture: ComponentFixture<ConsumidorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumidorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumidorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
