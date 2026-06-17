package com.cybershades.taskapp.controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.cybershades.taskapp.dto.TaskResponseDto;
import com.cybershades.taskapp.entity.Task;
import com.cybershades.taskapp.entity.TaskStatus;
import com.cybershades.taskapp.service.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cybershades.taskapp.dto.CreateTaskDto;
import jakarta.validation.Valid;


import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/api/tasks")
    public List<TaskResponseDto> getTasks(
            @RequestParam(required = false) TaskStatus status
            ) {
                if (status == null) {
                    return taskService.getAllTasks();
                }
            return taskService.getTasksByStatus(status);
    }

    @GetMapping("/api/tasks/{id}")
    public TaskResponseDto getTaskById(@PathVariable Long id) {
        return taskService.getTaskById(id);
    }

    @PostMapping("/api/tasks")
    public TaskResponseDto createTask(@Valid @RequestBody CreateTaskDto dto) {
        return taskService.createTask(dto);
    }

    @DeleteMapping("/api/tasks/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/api/tasks/{id}")
    public TaskResponseDto updateTask(@PathVariable Long id,
                           @RequestBody CreateTaskDto dto) {
        return taskService.updateTask(id, dto);
    }

}
