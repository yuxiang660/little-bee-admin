import { Reducer } from 'redux';

interface QueryParams {
  key: string;
  value: string;
}

export interface RequestStateType {
  method?: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  url?: string;
  queryParams?: QueryParams[];
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
    queryParams: [],
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
