import { Component, OnInit, signal } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './models/task';
import { firstValueFrom } from 'rxjs';
import { StatusFilterComponent } from './components/status-filter/status-filter';
import { TaskCardComponent } from './components/task-card/task-card';
import { TaskFormComponent } from './components/task-form/task-form';
import { OverviewCard } from './components/overview-card/overview-card';
import { LucideCircleCheckBig, LucideLayoutList } from '@lucide/angular';

type TaskStatusFilter = 'ALL' | 'TODO' | 'IN_PROGRESS' | 'COMPLETED';

@Component({
  selector: 'app-root',
  imports: [
    StatusFilterComponent,
    TaskCardComponent,
    TaskFormComponent,
    OverviewCard,
    LucideCircleCheckBig,
    LucideLayoutList,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('frontend');

  tasks = signal<Task[]>([]);
  selectedStatus = signal<TaskStatusFilter>('ALL');

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks('ALL');
  }

  async loadTasks(status: TaskStatusFilter): Promise<void> {
    this.selectedStatus.set(status);

    const backendStatus = status === 'ALL' ? undefined : status;

    const tasks = await firstValueFrom(this.taskService.getTasks(backendStatus));

    this.tasks.set(tasks);
  }

  async deleteTask(id: number): Promise<void> {
    await firstValueFrom(this.taskService.deleteTask(id));

    await this.loadTasks(this.selectedStatus());
  }

  async updateTask(task: Task): Promise<void> {
    await firstValueFrom(this.taskService.updateTask(task.id, task));

    await this.loadTasks(this.selectedStatus());
  }
}
