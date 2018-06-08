import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaccommodationComponent } from './newaccommodation.component';

describe('NewaccommodationComponent', () => {
  let component: NewaccommodationComponent;
  let fixture: ComponentFixture<NewaccommodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewaccommodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewaccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
