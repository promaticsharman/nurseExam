import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeQuestionListComponent } from './free-question-list.component';

describe('FreeQuestionListComponent', () => {
  let component: FreeQuestionListComponent;
  let fixture: ComponentFixture<FreeQuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeQuestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
