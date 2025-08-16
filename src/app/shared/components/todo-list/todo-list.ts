import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { TodoItem } from '../../models/todo.model';
import { TodoItemComponent } from '../todo-item/todo-item';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoItemComponent],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.scss']
})
export class TodoListComponent implements OnInit {
  todos: TodoItem[] = [];

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getAll().subscribe((data) => {
      this.todos = data as TodoItem[];
    });
  }

  onDeleteTodo(id: number) {
    this.todoService.delete(id).subscribe(() => {
      this.loadTodos(); // Reload lại danh sách
    });
  }

  onEditTodo(id: number) {
    this.router.navigate(['/edit', id]); // Chuyển sang trang sửa
  }
}
