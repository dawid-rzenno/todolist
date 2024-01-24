import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerComponent } from './task-manager.component';
import { TaskService } from "./task/task.service";
import { TaskComponent } from "./task/task.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatGridListModule } from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    declarations: [
        TaskManagerComponent,
        TaskComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatTableModule,
        MatDialogModule,
        MatSelectModule,
        MatGridListModule,
        MatIconModule,
    ],
    exports: [
        TaskManagerComponent
    ],
    providers: [
        TaskService
    ]
})
export class TaskManagerModule { }
