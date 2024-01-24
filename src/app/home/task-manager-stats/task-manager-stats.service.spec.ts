import { TestBed } from '@angular/core/testing';

import { TaskManagerStatsService } from './task-manager-stats.service';

describe('TaskManagerStatsService', () => {
  let service: TaskManagerStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskManagerStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
