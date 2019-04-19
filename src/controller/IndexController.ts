import { action, KatrineController, controller } from 'katrine';

@controller
export default class IndexController extends KatrineController {

  getLayout() : string {
    return './view/layout/main.pug';
  }

  @action('/') // express compatible route
  homePageIndexAction(req): string {
    return this.render('./view/actions/index.pug', {});
  }

  @action('404')
  pageNotFound(req): string {
    return this.render('./view/system/404.pug',{});
  }

  @action('403')
  accessDenied(req): string {
    return this.render('./view/system/403.pug',{});
  }
}
