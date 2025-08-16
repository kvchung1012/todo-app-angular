import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.html',
  styleUrls: ['./todo-item.scss']
})
export class TodoItemComponent {
  @Input() todo!: TodoItem;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.todo.id!);
  }

  onEdit() {
    this.edit.emit(this.todo.id!);
  }
}
