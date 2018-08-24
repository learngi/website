import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorparateComponent } from './corparate.component';

describe('CorparateComponent', () => {
  let component: CorparateComponent;
  let fixture: ComponentFixture<CorparateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorparateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorparateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
