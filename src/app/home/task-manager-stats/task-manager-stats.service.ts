import { Injectable } from '@angular/core';
import {TaskService} from "../../features/task-manager/task/task.service";
import {Task} from "../../features/task-manager/task/task";

export type UsageStatisticsByAuthor =
  TasksCreatedByAuthorUsageStatistics
  & TasksUpdatedByAuthorUsageStatistics
  & TasksCompletedByAuthorUsageStatistics;

export type TasksCreatedByAuthorUsageStatistics = {
  author: string;
  tasksCreated: number;
}

export type TasksUpdatedByAuthorUsageStatistics = {
  author: string;
  tasksUpdated: number;
}

export type TasksCompletedByAuthorUsageStatistics = {
  author: string;
  tasksCompleted: number;
}

@Injectable({
  providedIn: 'root'
})
export class TaskManagerStatsService {

  constructor(private taskService: TaskService) { }

  createUsageStatisticsByAuthor(): UsageStatisticsByAuthor[] {
    const tasks: Task[] = this.taskService.readAll();

    const tasksByAuthor: Map<string, Task[]> = new Map<string, Task[]>();
    const authors: string[] = [];

    // ToDo: implement task completion in dialog window and usage statistics table

    tasks.forEach((task: Task) => {
      const tasksByTheSameAuthor: Task[] | undefined = tasksByAuthor.get(task.author);
      if (tasksByTheSameAuthor) {
        tasksByTheSameAuthor.push(task);
      } else {
        authors.push(task.author);
        tasksByAuthor.set(task.author, [task])
      }
    });

    return authors.map((author: string) => {
      return {
        author,
        tasksCreated: tasksByAuthor.get(author)?.length ?? 0,
        tasksUpdated: 0,
        tasksCompleted: 0
      }
    });
  }
}
