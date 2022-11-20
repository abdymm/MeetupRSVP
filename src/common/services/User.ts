import {ENDPOINT_USERS} from '@Constants/API';
import {APIResponse} from '@Types/APIResponse';
import {User} from '@Types/User';
import {API} from './API';

export interface UserResponse extends APIResponse {
  users: User[];
}

class UserService {
  api = new API();
  async getAll() {
    return await this.api.apiRequest.get<UserResponse>(ENDPOINT_USERS);
  }
}

export default new UserService();
