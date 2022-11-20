import {createModel} from '@rematch/core';
import Auth from '@Services/Auth';
import {RootModel} from '@Stores/models';
import {APIResponse} from '@Types/APIResponse';
import {ModelState} from '@Types/ModelState';
import {User} from '@Types/User';

interface RegistrationState extends ModelState {
  data: APIResponse | null;
}

const initialState = {
  data: null,
  loading: false,
  error: null,
};
const registration = createModel<RootModel>()({
  state: initialState as unknown as RegistrationState,
  reducers: {
    request() {
      return {
        data: null,
        loading: true,
        error: null,
      };
    },
    success(state, data: APIResponse) {
      return {
        ...state,
        data: data,
        loading: false,
        error: null,
      };
    },
    failure(state, errorMessage: string) {
      return {
        ...state,
        data: null,
        loading: false,
        error: errorMessage,
      };
    },
    clearState() {
      return initialState;
    },
  },
  effects: () => ({
    async register(user: User) {
      this.request();
      try {
        const res = await Auth.register(user);
        this.success(res.data);
      } catch (error) {
        this.failure(error);
      }
    },
  }),
});
export default registration;
