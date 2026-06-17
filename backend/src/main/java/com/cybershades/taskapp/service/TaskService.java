package com.cybershades.taskapp.service;

import com.cybershades.taskapp.dto.TaskResponseDto;
import com.cybershades.taskapp.entity.Task;
import com.cybershades.taskapp.entity.TaskPriority;
import com.cybershades.taskapp.entity.TaskStatus;
import com.cybershades.taskapp.repository.TaskRepository;
import org.springframework.stereotype.Service;

import com.cybershades.taskapp.dto.CreateTaskDto;

import com.cybershades.taskapp.exception.ResourceNotFoundException;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository repository;

    private TaskResponseDto mapToDto(Task task) {
        return new TaskResponseDto(
                task.getId(),
                task.getTitle(),
                task.getDescription(),
                task.getStatus(),
                task.getPriority()
        );
    }

    public TaskService(TaskRepository taskRepository) {
        this.repository = taskRepository;
    }

    public List<TaskResponseDto> getAllTasks() {
        return repository.findAll()
                .stream()
                .map(this::mapToDto)
                .toList();
    }

    public List<TaskResponseDto> getTasksByStatus(TaskStatus status) {
        return repository.findByStatus(status)
                .stream()
                .map(this::mapToDto)
                .toList();
    }

    public TaskResponseDto createTask(CreateTaskDto dto) {
        Task task = new Task();

        task.setTitle(dto.getTitle());
        task.setDescription(dto.getDescription());
        task.setStatus(dto.getStatus());
        task.setPriority(dto.getPriority());

        Task saved = repository.save(task);

        return mapToDto(saved);
    }

    public TaskResponseDto getTaskById(Long id) {
        Task task = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found."));;
        return mapToDto(task);

    }

    public TaskResponseDto updateTask(Long id, CreateTaskDto dto) {
        Task task = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found."));
        task.setTitle(dto.getTitle());
        task.setDescription(dto.getDescription());
        task.setStatus(dto.getStatus());
        task.setPriority(dto.getPriority());

        Task saved = repository.save(task);

        return mapToDto(saved);
    }

    public void deleteTask(Long id) {
        Task task = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found."));
        repository.delete(task);
    }
}
