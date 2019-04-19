import { KatrineApp } from 'katrine';

/**
 * Katrine requires directories by absolute path or relative path
 * if dir path start with '.' (dot) Katrine will require relatively
 * Else Katrine will require dirs by absolute path
 *
 * Any controllers must be annotated by @controller decorator
 */
const controllers = [
  './controller/IndexController',
  './controller/UserController',
  './controller/AdminController',
];

KatrineApp.loadControllers(controllers);

KatrineApp.setPublicFolder('public');
KatrineApp.run({});

console.log('visit http://localhost:3400/');
