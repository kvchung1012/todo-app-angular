import { bootstrapApplication } from '@angular/platform-browser';
import { provideIndexedDb, DBConfig } from 'ngx-indexed-db';
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';
import { LoginComponent } from './app/shared/components/login/login';
import { TodoListComponent } from './app/shared/components/todo-list/todo-list';
import { TodoFormComponent } from './app/shared/components/todo-form/todo-form';
import { HomeComponent } from './app/shared/components/home/home';
import 'zone.js'
import { provideRouter, Routes } from '@angular/router';

  const dbConfig: DBConfig = {
  name: 'TodoDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'todos',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'description', keypath: 'description', options: { unique: false } },
        { name: 'completed', keypath: 'completed', options: { unique: false } }
      ]
    }
  ]
};

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: TodoListComponent },
  { path: 'add', component: TodoFormComponent },
  { path: '**', redirectTo: '' }
];
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideIndexedDb(dbConfig)
  ]
});
