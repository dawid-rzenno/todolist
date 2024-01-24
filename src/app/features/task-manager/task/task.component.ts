import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Task, TaskForm } from "./task";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  readonly formGroup: FormGroup<TaskForm> = this.fb.group<TaskForm>({
    id: this.fb.nonNullable.control( undefined),
    title: this.fb.nonNullable.control('', Validators.required),
    description: this.fb.nonNullable.control('', Validators.required),
    author: this.fb.nonNullable.control( '', Validators.required),
    color: this.fb.nonNullable.control('', Validators.required),
    creationDate: this.fb.nonNullable.control(new Date(), Validators.required),
    updateDate: this.fb.nonNullable.control(new Date(), Validators.required),
    completionDate: this.fb.nonNullable.control(new Date(), Validators.required),
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: { task: Task | undefined }, private fb: FormBuilder) {
    if (data.task) {
      this.formGroup.patchValue(data.task)
      this.formGroup.disable();
    }
  }

  edit(): void {
    this.formGroup.enable();
  }

  complete(): void {
    this.formGroup.get('completionDate')?.setValue(new Date())
  }
}
