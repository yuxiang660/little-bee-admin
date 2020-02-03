import request from '@/utils/request';
import api from './apiRoutes';

export async function query(): Promise<any> {
  return request(api.getAllUsers.url, {
    method: api.getAllUsers.method,
  });
}

export async function queryCurrent(): Promise<any> {
  return request(api.getCurrentUser.url, {
    method: api.getCurrentUser.method,
  });
}

export async function queryNotices(): Promise<any> {
  return request(api.getNotices.url, {
    method: api.getNotices.method,
  });
}
