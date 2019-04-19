import {
  action,
  KatrineController,
  HTTPRequestType,
  KatrineApp,
  controller,
  accessByAuth,
  AuthStatus,
  UserInterface
} from 'katrine';

import UserObject from '../User';

@controller
export default class UserController extends KatrineController {

  private createUser(userData) : UserInterface {
    const user = new UserObject(userData.id, userData.role, userData);
    user.setSigned();

    return user;
  }

  @accessByAuth(AuthStatus.NOT_LOGGED_IN)
  @action('/user/login', HTTPRequestType.POST)
  async loginUserAction(req) {
    const email = req.body.email;
    const password = req.body.password;

    try {
      let userData = null;

      if (email === 'admin@example.com' && password === 'admin') {
        userData = {
          id: 1,
          role: 'admin'
        };
      }

      if (userData) {
        const userObject = this.createUser(userData);
        KatrineApp.auth(req.session, userObject);
      } else {
        throw 'User Email or password incorrect';
      }

      return JSON.stringify({
        status: 'success',
        messsage: '',
        data: {
          role: userData.role,
          id: userData.id
        }
      });
    } catch (e) {

      console.error(e);

      return JSON.stringify({
        status: 'error',
        message: typeof e === 'string' ? e : 'User Email or password incorrect'
      })
    }
  }

}
