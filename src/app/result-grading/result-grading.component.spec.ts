import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultGradingComponent } from './result-grading.component';

describe('ResultGradingComponent', () => {
  let component: ResultGradingComponent;
  let fixture: ComponentFixture<ResultGradingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultGradingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultGradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
