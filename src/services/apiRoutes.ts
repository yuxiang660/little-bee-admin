import { notification } from 'antd';

import request from '@/utils/request';

interface ApiRoute {
  method: string;
  url: string;
  body?: string;
}

interface ApiRoutesMap {
  [name: string]: ApiRoute;
}

export async function apiRequest(method: string, url: string, body?: string): Promise<any> {
  let params: any;
  if (body) {
    try {
      params = JSON.parse(body);
    } catch (err) {
      notification.error({
        message: err.name,
        description: err.message,
      });
    }
  }
  return request(url, {
    method,
    data: params,
  });
}

const apiRoutes: ApiRoutesMap = {
  login: {
    method: 'POST',
    url: '/api/login/account',
    body: '{"userName":"","password":""}',
  },
  queryCaptcha: { method: 'GET', url: '/api/login/captcha?mobile=' },

  getAllUsers: { method: 'GET', url: '/api/users' },
  getCurrentUser: { method: 'GET', url: '/api/currentUser' },
  getNotices: { method: 'GET', url: '/api/notices' },
};

export default apiRoutes;
