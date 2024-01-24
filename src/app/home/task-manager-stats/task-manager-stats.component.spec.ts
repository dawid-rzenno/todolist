import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerStatsComponent } from './task-manager-stats.component';

describe('TaskManagerStatsComponent', () => {
  let component: TaskManagerStatsComponent;
  let fixture: ComponentFixture<TaskManagerStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskManagerStatsComponent]
    });
    fixture = TestBed.createComponent(TaskManagerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
