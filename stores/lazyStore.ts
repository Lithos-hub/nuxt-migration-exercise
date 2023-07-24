import { defineStore } from 'pinia';
import { PROJECT_API_URL } from '@/constants/project';

import axios from 'axios';

interface Payload<T> {
  body?: T;
  id?: string;
}

export const useLazyStore = defineStore('lazy', {
  state: () => ({
    count: 0,
  }),
  actions: {
    getMany() {
      return axios.get(PROJECT_API_URL.GET_MANY());
    },
    getOne({ id }: Payload<string>) {
      return axios.get(PROJECT_API_URL.GET_ONE(id));
    },
    createOne({ body }: Payload<unknown>) {
      return axios.post(PROJECT_API_URL.CREATE_ONE(), body);
    },
    updateOne({ body, id }: Payload<unknown>) {
      return axios.put(PROJECT_API_URL.UPDATE_ONE(id), body);
    },
    deleteOne({ id }: Payload<string>) {
      return axios.delete(PROJECT_API_URL.DELETE_ONE(id));
    },
  },
});
