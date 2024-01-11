import { Component } from '@angular/core';
import { TaskService } from "./task/task.service";
import { Task } from "./task/task";
import { Observable } from "rxjs";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent {
  tasks$: Observable<Task[]> = this.taskService.readAll$;

  displayedColumns: string[] = [
    'color',
    'title',
    'description',
    'author',
    'creationDate',
    'lastUpdateDate',
    'actions'
  ];

  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  delete(taskId: number) {
    this.taskService.delete(taskId);
  }

  openReadDialog(task: Task): void {
    const dialogRef: MatDialogRef<TaskComponent, Task> = this.dialog.open(TaskComponent, { data: { task }});
    dialogRef.afterClosed().subscribe((task: Task | undefined) => {
      if (task) {
        this.taskService.update(task)
      }
    });
  }

  openCreateDialog(): void {
    const dialogRef: MatDialogRef<TaskComponent, Task> = this.dialog.open(TaskComponent, { data: { task: undefined }});
    dialogRef.afterClosed().subscribe((task: Task | undefined) => {
      if (task) {
        this.taskService.create(task)
      }
    });
  }
}
