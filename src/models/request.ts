import { Reducer } from 'redux';
import { Effect } from 'dva';

import { apiRequest } from '@/services/apiRoutes';

export interface RequestStateType {
  method?: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  url?: string;
  body?: string;
  respond?: string;
}

interface RequestModelType {
  namespace: string;
  state: RequestStateType;
  reducers: {
    changeApiRoute: Reducer<RequestStateType>;
    changeBody: Reducer<RequestStateType>;
    saveResponse: Reducer<RequestStateType>;
  };
  effects: {
    send: Effect;
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
    saveResponse(state, action) {
      return {
        ...state,
        respond: JSON.stringify(action.payload),
      };
    },
  },

  effects: {
    *send({ payload: { method, url, body } }, { call, put }) {
      const response = yield call(apiRequest, method, url, body);
      yield put({
        type: 'saveResponse',
        payload: response,
      });
    },
  },
};

export default Model;
