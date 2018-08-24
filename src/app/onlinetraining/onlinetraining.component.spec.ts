import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinetrainingComponent } from './onlinetraining.component';

describe('OnlinetrainingComponent', () => {
  let component: OnlinetrainingComponent;
  let fixture: ComponentFixture<OnlinetrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinetrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinetrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
