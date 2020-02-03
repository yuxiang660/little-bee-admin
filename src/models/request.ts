import { Reducer } from 'redux';

interface QueryParams {
  key: string;
  value: string;
}

export interface RequestStateType {
  method?: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  url?: string;
  hasParams?: boolean;
  queryParams?: QueryParams[];
}

interface RequestModelType {
  namespace: string;
  state: RequestStateType;
  reducers: {
    changeApiRoute: Reducer<RequestStateType>;
    changeMethod: Reducer<RequestStateType>;
    toggleParams: Reducer<RequestStateType>;
  };
}

const Model: RequestModelType = {
  namespace: 'request',

  state: {
    method: 'GET',
    url: '',
    hasParams: false,
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
    toggleParams(state) {
      return { ...state, hasParams: state ? !state.hasParams : false };
    },
  },
};

export default Model;
