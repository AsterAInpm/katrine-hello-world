import { KatrineApp } from 'katrine';
import IndexController from './controller/IndexController';
// register controller
KatrineApp.addController(new IndexController());

const port = process.env.PORT || 2100;

// set the public folder with CSS, JS, and other static resources
KatrineApp.setPublicFolder('public');

console.log('run your site at http://localhost:' + port);
KatrineApp.run(port);

