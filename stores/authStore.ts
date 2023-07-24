import { defineStore } from 'pinia';
import axios from 'axios';

import { AUTH_API_URL } from '@/constants/auth';

import Cookies from 'js-cookie';

interface User {
  email: string;
  fullName: string;
  avatar: string;
}

interface State {
  data: {
    user: User;
    token: string;
  } | null;
}

interface Getters {
  [index: string]: any;
}

interface Actions {
  SET_AUTH: (data: State['data']) => void;
  register: (payload: { form: unknown }) => Promise<unknown>;
  login: (payload: { form: unknown }) => Promise<unknown>;
  getAuth: () => Promise<unknown>;
}

export const useAuthStore = defineStore<'auth', State, Getters, Actions>(
  'auth',
  {
    state: () => ({
      data: null,
    }),
    getters: {
      currentUser: (state: State) => state.data?.user,
      token: (state: State) => state.data?.token,
    },
    actions: {
      SET_AUTH(data) {
        this.data = data;
      },
      async register({ form }) {
        const { data } = await axios.post(AUTH_API_URL.REGISTER(), form);
        this.SET_AUTH(data);
        Cookies.set('auth', data);

        return data;
      },
      async login({ form }) {
        const { data } = await axios.post(AUTH_API_URL.LOGIN(), form);
        this.SET_AUTH(data);
        Cookies.set('auth', data);

        return data;
      },
      async getAuth() {
        const { data } = await axios.get(AUTH_API_URL.ME());

        return data;
      },
    },
  }
);
