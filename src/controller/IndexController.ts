import { action, Controller } from 'katrine';

export default class IndexController extends Controller {

  getLayout() : string {
    return './view/layout/main.pug';
  }

  @action('/') // express compatible route
  someIndexAction(req): string {
    return this.render('./view/actions/index.pug', {name: 'world'});
  }

}
