import { Component, computed, input } from '@angular/core';
import { LucideClock, LucideLayoutList, LucideLoader, LucideCircleCheck } from '@lucide/angular';
import { Task } from '../../models/task';

@Component({
  selector: 'app-overview-card',
  standalone: true,
  imports: [LucideClock, LucideLayoutList, LucideLoader, LucideCircleCheck],
  templateUrl: './overview-card.html',
  styleUrl: './overview-card.css',
})
export class OverviewCard {
  tasks = input.required<Task[]>();

  totalTasks = computed(() => this.tasks().length);

  todoTasks = computed(() => this.tasks().filter((task) => task.status === 'TODO').length);

  inProgressTasks = computed(
    () => this.tasks().filter((task) => task.status === 'IN_PROGRESS').length,
  );

  completedTasks = computed(
    () => this.tasks().filter((task) => task.status === 'COMPLETED').length,
  );
}
