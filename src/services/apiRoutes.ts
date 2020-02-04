interface ApiRoute {
  method: string;
  url: string;
  body?: any;
}

interface ApiRoutesMap {
  [name: string]: ApiRoute;
}

const apiRoutes: ApiRoutesMap = {
  login: {
    method: 'POST',
    url: '/api/login/account',
    body: '{"userName":"","password":"","mobile":"","captcha":""}',
  },
  queryCaptcha: { method: 'GET', url: '/api/login/captcha?mobile=' },

  getAllUsers: { method: 'GET', url: '/api/users' },
  getCurrentUser: { method: 'GET', url: '/api/currentUser' },
  getNotices: { method: 'GET', url: '/api/notices' },
};

export default apiRoutes;
