import request from '@/utils/request';
import api from './apiRoutes';

export interface LoginParamsType {
  userName: string;
  password: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return request(api.login.url, {
    method: api.login.method,
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(api.queryCaptcha.url + mobile);
}
