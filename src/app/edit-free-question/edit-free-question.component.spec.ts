import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFreeQuestionComponent } from './edit-free-question.component';

describe('EditFreeQuestionComponent', () => {
  let component: EditFreeQuestionComponent;
  let fixture: ComponentFixture<EditFreeQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFreeQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFreeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
