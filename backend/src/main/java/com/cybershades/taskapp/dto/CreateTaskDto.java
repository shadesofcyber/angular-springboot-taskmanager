package com.cybershades.taskapp.dto;

import com.cybershades.taskapp.entity.TaskPriority;
import com.cybershades.taskapp.entity.TaskStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateTaskDto {

    @NotBlank(message = "Titel darf nicht leer sein.")
    private String title;

    @NotBlank(message = "Description darf nicht leer sein.")
    private String description;

    @NotNull(message = "Status darf nicht leer sein.")
    private TaskStatus status;

    @NotNull(message = "Priority darf nicht leer sein.")
    private TaskPriority priority;
}
