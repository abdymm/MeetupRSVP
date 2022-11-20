import {ENDPOINT_USERS} from '@Constants/API';
// import API from '@Services/API';
import {API} from './API';

class UserService {
  api = new API();
  async getAll() {
    try {
      const res = await this.api.apiRequest.get(ENDPOINT_USERS);
      return res;
    } catch (error) {
      return error;
    }
  }
}

export default new UserService();
