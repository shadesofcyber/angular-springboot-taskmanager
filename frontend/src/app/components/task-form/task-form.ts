import { Component, EventEmitter, Output, signal } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskFormComponent {
  @Output() taskCreated = new EventEmitter<void>();

  title = signal('');
  description = signal('');
  status = signal('TODO');
  priority = signal('MEDIUM');
  titleError = signal('');
  descriptionError = signal('');

  constructor(private taskService: TaskService) {}

  async submitForm(): Promise<void> {
    let hasError = false;

    this.titleError.set('');
    this.descriptionError.set('');

    if (!this.title().trim()) {
      this.titleError.set('Title is required.');
      hasError = true;
    }

    if (!this.description().trim()) {
      this.descriptionError.set('Description is required.');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    await firstValueFrom(
      this.taskService.createTask({
        title: this.title(),
        description: this.description(),
        status: this.status(),
        priority: this.priority(),
      }),
    );

    this.title.set('');
    this.description.set('');
    this.status.set('TODO');
    this.priority.set('MEDIUM');

    this.taskCreated.emit();
  }
}
