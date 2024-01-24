import { Component } from '@angular/core';
import {TaskManagerStatsService, UsageStatisticsByAuthor} from "../task-manager-stats.service";

@Component({
  selector: 'app-usage-statistics-table',
  templateUrl: './usage-statistics-table.component.html',
  styleUrls: ['./usage-statistics-table.component.scss']
})
export class UsageStatisticsTableComponent {
  usageStatisticsByAuthor: UsageStatisticsByAuthor[] = this.taskManagerStatsService.createUsageStatisticsByAuthor();
  displayedColumns = ['author', 'tasksCreated', 'tasksUpdated', 'tasksCompleted'];

  constructor(private taskManagerStatsService: TaskManagerStatsService) {}
}
