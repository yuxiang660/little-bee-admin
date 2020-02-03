import request from '@/utils/request';
import api from './apiRoutes';

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return request(api.login.url, {
    method: api.login.method,
    data: params,
  });
}

export async function getFakeCaptcha(mobileNumber: string) {
  return request(api.queryCaptcha.url, {
    method: api.queryCaptcha.method,
    params: { mobile: mobileNumber },
  });
}
