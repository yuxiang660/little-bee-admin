import { Reducer } from 'redux';

export interface RequestStateType {
  method?: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  url?: string;
}

interface RequestModelType {
  namespace: string;
  state: RequestStateType;
  reducers: {
    changeApiRoute: Reducer<RequestStateType>;
    changeMethod: Reducer<RequestStateType>;
  };
}

const Model: RequestModelType = {
  namespace: 'request',

  state: {
    method: 'GET',
    url: '',
  },

  reducers: {
    changeApiRoute(state, { payload }) {
      return {
        ...state,
        method: payload.method,
        url: payload.url,
      };
    },
    changeMethod(state, { method }) {
      return {
        ...state,
        method,
      };
    },
  },
};

export default Model;
