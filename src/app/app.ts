import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './layout/header/header.component';
import { ExampleComponent } from './shared/components/example.component';
import { TodoForm } from './shared/components/todo-form/todo-form'
import { TodoListComponent } from "./shared/components/todo-list/todo-list";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, HeaderComponent, ExampleComponent, TodoForm, TodoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('todo-app');
}
