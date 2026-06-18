import { Component, OnInit, signal, computed } from '@angular/core';
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

  allTasks = signal<Task[]>([]);
  selectedStatus = signal<TaskStatusFilter>('ALL');
  visibleTasks = computed(() => {
    const status = this.selectedStatus();

    if (status === 'ALL') {
      return this.allTasks();
    }

    return this.allTasks().filter((task) => task.status === status);
  });

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  async loadTasks(): Promise<void> {
    const tasks = await firstValueFrom(this.taskService.getTasks());

    this.allTasks.set(tasks);
  }

  async deleteTask(id: number): Promise<void> {
    await firstValueFrom(this.taskService.deleteTask(id));

    await this.loadTasks();
  }

  async updateTask(task: Task): Promise<void> {
    await firstValueFrom(this.taskService.updateTask(task.id, task));

    await this.loadTasks();
  }

  changeStatusFilter(status: TaskStatusFilter): void {
    this.selectedStatus.set(status);
  }
}
