
import { action, KatrineController, controller, accessByRole } from 'katrine';

@controller
export default class AdminController extends KatrineController {

  getLayout() : string {
    return './view/layout/main.pug';
  }

  @accessByRole('admin')
  @action('/admin/')
  operatorIndexAction(req): string | Promise<any> {
    return this.render('./view/actions/admin.pug');
  }

}
