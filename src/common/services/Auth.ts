import {ENDPOINT_REGISTER} from '@Constants/API';
import {APIResponse} from '@Types/APIResponse';
import {User} from '@Types/User';
import {API} from './API';

class AuthService {
  api = new API();
  async register(user: User) {
    return await this.api.apiRequest.post<APIResponse>(ENDPOINT_REGISTER, user);
  }
}

export default new AuthService();
