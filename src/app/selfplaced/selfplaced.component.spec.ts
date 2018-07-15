import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfplacedComponent } from './selfplaced.component';

describe('SelfplacedComponent', () => {
  let component: SelfplacedComponent;
  let fixture: ComponentFixture<SelfplacedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfplacedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfplacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
