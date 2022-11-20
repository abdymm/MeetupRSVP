import {ENDPOINT_REGISTER} from '@Constants/API';
// import API from '@Services/API';
import {User} from '@Types/User';
import {API} from './API';

class AuthService {
  api = new API();
  async register(user: User) {
    return await this.api.apiRequest.post(ENDPOINT_REGISTER, user);
  }
}

export default new AuthService();
