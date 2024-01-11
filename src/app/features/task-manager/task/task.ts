import { FormControl } from "@angular/forms";

export interface Task {
  id: number | undefined;
  title: string;
  description: string;
  author: string;
  color: string;
  creationDate: Date;
  lastUpdateDate: Date;
}

export interface TaskForm {
  id: FormControl<number | undefined>;
  title: FormControl<string>;
  description: FormControl<string>;
  author: FormControl<string>;
  color: FormControl<string>;
  creationDate: FormControl<Date>;
  lastUpdateDate: FormControl<Date>;
}
