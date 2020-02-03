interface ApiRoute {
  method: string;
  url: string;
}

interface ApiRoutesMap {
  [name: string]: ApiRoute;
}

const apiRoutes: ApiRoutesMap = {
  login: { method: 'POST', url: '/api/login/account' },
  queryCaptcha: { method: 'GET', url: '/api/login/captcha' },

  getAllUsers: { method: 'GET', url: '/api/users' },
  getCurrentUser: { method: 'GET', url: '/api/currentUser' },
  getNotices: { method: 'GET', url: '/api/notices' },
};

export default apiRoutes;
