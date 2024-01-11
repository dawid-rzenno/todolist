import { Injectable } from '@angular/core';
import { Task } from "./task";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class TaskService {
  get readAll$(): Observable<Task[]> {
    return this._readAll$.asObservable();
  }

  readonly key: string = 'tasks'
  readonly lastUsedIdKey: string = `${this.key}.lastUsedId`;

  private _readAll$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(this.readAll());

  private get getNewId(): number {
    let lastUsedIdStringify: string | null = localStorage.getItem(this.lastUsedIdKey);

    if (lastUsedIdStringify) {
      const lastUsedId: number = JSON.parse(lastUsedIdStringify)
      localStorage.setItem(this.lastUsedIdKey, JSON.stringify(lastUsedId + 1))

      lastUsedIdStringify = localStorage.getItem(this.lastUsedIdKey);
      if (lastUsedIdStringify) {
        return JSON.parse(lastUsedIdStringify);
      }
    }

    this.initLastUsedId()
    return 0;
  }

  create(task: Task): void {
    const dateStamp: Date = new Date();
    localStorage.setItem(
        this.key,
        JSON.stringify([...this.readAll(), { ...task, id: this.getNewId, creationDate: dateStamp, lastUpdateDate: dateStamp }])
    );
    this.triggerChangeNotification();
  }

  read(id: number): Task | undefined {
    return this.readAll().find((task: Task) => task.id === id);
  }

  readAll(): Task[] {
    const tasksStringify: string | null = localStorage.getItem(this.key);

    if (!tasksStringify) {
      this.initTasks();
      return [];
    } else {
      return JSON.parse(tasksStringify);
    }
  }

  update(updatedTask: Task): void {
    localStorage.setItem(
        this.key,
        JSON.stringify(
            this.readAll().map((task: Task) => {
              return updatedTask.id === task.id ? { ...updatedTask, lastUpdateDate: new Date() } : task
            })
        )
    );
    this.triggerChangeNotification();
  }

  delete(id: number): void {
    localStorage.setItem(
        this.key,
        JSON.stringify(
            this.readAll().filter((task: Task) => task.id !== id)
        )
    );
    this.triggerChangeNotification();
  }

  private initTasks(): void {
    localStorage.setItem(this.key, JSON.stringify([]));
  }

  private initLastUsedId(): void {
    localStorage.setItem(this.lastUsedIdKey, JSON.stringify(0));
  }

  private triggerChangeNotification(): void {
    this._readAll$.next(this.readAll());
  }
}
