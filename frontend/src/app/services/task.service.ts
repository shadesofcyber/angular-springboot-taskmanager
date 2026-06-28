import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTasks(status?: string) {
    const url = status ? `${this.apiUrl}?status=${status}` : this.apiUrl;

    console.log('API URL:', url);
    return this.http.get<Task[]>(url);
  }

  createTask(task: { title: string; description: string; status: string; priority: string }) {
    return this.http.post<Task>(this.apiUrl, task);
  }

  deleteTask(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateTask(id: number, task: Task) {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
  }
}
