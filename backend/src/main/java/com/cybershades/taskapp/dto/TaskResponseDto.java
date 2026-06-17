package com.cybershades.taskapp.dto;

import com.cybershades.taskapp.entity.TaskPriority;
import com.cybershades.taskapp.entity.TaskStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class TaskResponseDto {

    private Long id;
    private String title;
    private String description;
    private TaskStatus status;
    private TaskPriority priority;
}
