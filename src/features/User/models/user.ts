import {createModel} from '@rematch/core';
import User from '@Services/User';
import {RootModel} from '@Stores/models';
import {ModelState} from '@Types/ModelState';
import {User as UserType} from '@Types/User';

interface UserState extends ModelState {
  data: UserType[] | null | [];
}

const initialState = {
  data: null,
  loading: false,
  error: null,
};
const user = createModel<RootModel>()({
  state: initialState as unknown as UserState,
  reducers: {
    request(state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    success(state, data: UserType[]) {
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
    async fetch() {
      this.request();
      try {
        const res = await User.getAll();
        this.success(res.data.users);
      } catch (error) {
        this.failure(error?.toString());
      }
    },
  }),
});
export default user;
