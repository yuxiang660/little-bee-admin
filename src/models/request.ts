import { Reducer } from 'redux';

export interface RequestStateType {
  method?: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  url?: string;
  body?: string;
}

interface RequestModelType {
  namespace: string;
  state: RequestStateType;
  reducers: {
    changeApiRoute: Reducer<RequestStateType>;
    changeBody: Reducer<RequestStateType>;
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
        method: payload.method ? payload.method : state?.method,
        url: payload.url ? payload.url : state?.url,
      };
    },
    changeBody(state, { payload }) {
      return {
        ...state,
        body: payload.body ? payload.body : undefined,
      };
    },
  },
};

export default Model;
