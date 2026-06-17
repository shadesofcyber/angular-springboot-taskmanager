import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCardComponent {
  @Input({ required: true }) task!: Task;

  @Output() deleteTask = new EventEmitter<number>();
  @Output() taskUpdated = new EventEmitter<Task>();

  onStatusChange(status: string): void {
    this.taskUpdated.emit({
      ...this.task,
      status,
    });
  }

  onPriorityChange(priority: string): void {
    this.taskUpdated.emit({
      ...this.task,
      priority,
    });
  }

  formatStatus(status: string): string {
    switch (status) {
      case 'TODO':
        return 'To Do';
      case 'IN_PROGRESS':
        return 'In Progress';
      case 'COMPLETED':
        return 'Completed';
      default:
        return status;
    }
  }

  formatPriority(priority: string): string {
    switch (priority) {
      case 'LOW':
        return 'Low';
      case 'MEDIUM':
        return 'Medium';
      case 'HIGH':
        return 'High';
      default:
        return priority;
    }
  }
}
