import { Component, EventEmitter, Input, Output } from '@angular/core';

type TaskStatusFilter = 'ALL' | 'TODO' | 'IN_PROGRESS' | 'COMPLETED';

@Component({
  selector: 'app-status-filter',
  imports: [],
  standalone: true,
  templateUrl: './status-filter.html',
  styleUrl: './status-filter.css',
})
export class StatusFilterComponent {
  @Input() selectedStatus: TaskStatusFilter = 'ALL';
  @Output() statusChange = new EventEmitter<TaskStatusFilter>();

  statuses: { label: string; value: TaskStatusFilter }[] = [
    { label: 'All', value: 'ALL' },
    { label: 'To Do', value: 'TODO' },
    { label: 'In Progress', value: 'IN_PROGRESS' },
    { label: 'Completed', value: 'COMPLETED' },
  ];

  selectStatus(status: TaskStatusFilter): void {
    this.statusChange.emit(status);
  }
}
