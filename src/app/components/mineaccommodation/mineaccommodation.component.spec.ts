import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineaccommodationComponent } from './mineaccommodation.component';

describe('MineaccommodationComponent', () => {
  let component: MineaccommodationComponent;
  let fixture: ComponentFixture<MineaccommodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineaccommodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineaccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
