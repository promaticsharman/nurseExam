import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFreeQuestionComponent } from './add-free-question.component';

describe('AddFreeQuestionComponent', () => {
  let component: AddFreeQuestionComponent;
  let fixture: ComponentFixture<AddFreeQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFreeQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFreeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
