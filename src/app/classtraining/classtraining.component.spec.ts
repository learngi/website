import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasstrainingComponent } from './classtraining.component';

describe('ClasstrainingComponent', () => {
  let component: ClasstrainingComponent;
  let fixture: ComponentFixture<ClasstrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasstrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasstrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
