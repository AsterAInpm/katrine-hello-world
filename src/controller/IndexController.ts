import { action, Controller, HTTPRequestType } from 'katrine';

export default class IndexController extends Controller {

  getLayout() : string {
    return './view/layout/main.pug';
  }

  @action('/') // express compatible route
  someIndexAction(req): string {
    return this.render('./view/actions/index.pug', {name: 'world'});
  }

  @action('/post', HTTPRequestType.POST) // test only POST query
  postAction(req): string {
    return 'This is Post';
  }
}
