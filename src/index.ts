import { KatrineApp } from 'katrine';
import IndexController from './controller/IndexController';

// register controller
KatrineApp.addController(new IndexController());

// make a config
const config = {
  httpServer: {
    port: 3500
  }
};


// set the public folder with CSS, JS, and other static resources
KatrineApp.setPublicFolder('public');

console.log('Find your site at http://localhost:' + config.httpServer.port);
KatrineApp.run(config);

