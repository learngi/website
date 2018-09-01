import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntershipComponent } from './intership.component';

describe('IntershipComponent', () => {
  let component: IntershipComponent;
  let fixture: ComponentFixture<IntershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
