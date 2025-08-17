import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { TodoItem } from '../../models/todo.model';
@Component({
  selector: 'app-todo-form',
  imports: [ CommonModule,FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.scss'
})
export class TodoFormComponent {
  title: string = '';
  description: string = '';
  deadline: string = '';
  errorMessage: string = '';

  constructor(private todoService: TodoService, private router: Router) {}

  addTodo() {
    const now = new Date();
    const deadlineDate = new Date(this.deadline);

    if (!this.title.trim()) {
      this.errorMessage = 'Tiêu đề không được để trống.';
      return;
    }

    if (!this.description.trim()) {
      this.errorMessage = 'Mô tả không được để trống.';
      return;
    }

    if (!this.deadline || isNaN(deadlineDate.getTime()) || deadlineDate < now) {
      this.errorMessage = 'Deadline phải là ngày trong tương lai.';
      return;
    }

    const newTodo: TodoItem = {
      title: this.title.trim(),
      description: this.description.trim(),
      status: 'in-progress',
      deadline: this.deadline
    };

    this.todoService.add(newTodo).subscribe({
      next: () => {
        // Reset form
        this.title = '';
        this.description = '';
        this.deadline = '';
        this.errorMessage = '';
        this.router.navigate(['/list']);
      },
      error: () => {
        this.errorMessage = 'Lỗi khi lưu công việc!';
      }
    });
  }
}
