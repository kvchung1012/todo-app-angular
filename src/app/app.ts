import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './layout/header/header.component';
import { ExampleComponent } from './shared/components/example.component';
import { TodoFormComponent } from './shared/components/todo-form/todo-form'
import { TodoListComponent } from "./shared/components/todo-list/todo-list";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, HeaderComponent, ExampleComponent, TodoFormComponent, TodoListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  protected readonly title = signal('todo-app');
}
