import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login';
import { TodoListComponent } from './shared/components/todo-list/todo-list';
import { TodoFormComponent} from './shared/components/todo-form/todo-form';
import { AppComponent } from './app';
import {HomeComponent} from './shared/components/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: TodoListComponent },
  { path: 'add', component: TodoFormComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});


