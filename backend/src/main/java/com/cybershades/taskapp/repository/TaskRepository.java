package com.cybershades.taskapp.repository;

import com.cybershades.taskapp.entity.Task;
import com.cybershades.taskapp.entity.TaskStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByStatus(TaskStatus status);

}
