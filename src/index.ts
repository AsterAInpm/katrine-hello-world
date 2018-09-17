import { KatrineApp } from 'katrine';
import IndexController from './controller/IndexController';
// register controller
KatrineApp.addController(new IndexController());

const port = process.env.PORT || 2100;
console.log('run your site at http://localhost:' + port);
KatrineApp.setPublicFolder('public');
KatrineApp.run(port);

