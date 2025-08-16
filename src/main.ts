import { bootstrapApplication } from '@angular/platform-browser';
import { provideIndexedDb, DBConfig } from 'ngx-indexed-db';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import 'zone.js'

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

bootstrapApplication(App, {
  providers: [
    provideIndexedDb(dbConfig)  // 👈 Thêm cái này để Angular inject được service
  ]
});
