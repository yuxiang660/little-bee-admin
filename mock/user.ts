import { Request, Response } from 'express';

function getFakeCaptcha(req: Request, res: Response) {
  return res.json('captcha-xxx');
}

function checkAccessToken(token: string | undefined): boolean {
  return token === `Bearer admin_token` || token === `Bearer user_token`;
}

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': (req: Request, res: Response) => {
    if (checkAccessToken(req.headers.authorization)) {
      if (req.headers.authorization?.includes('admin')) {
        return res.status(200).send({
          name: 'Little Bee Admin',
          userid: 'admin_uuid',
          role: 'admin',
        });
      }
      return res.status(200).send({
        name: 'Little Bee User',
        userid: 'user_uuid',
        role: 'user',
      });
    }
    return res.status(200).send({
      name: 'Little Bee Guest',
      userid: 'guest_uuid',
      role: 'guest',
    });
  },
  // GET POST 可省略
  'GET /api/users': (req: Request, res: Response) => {
    if (!checkAccessToken(req.headers.authorization)) {
      return res.status(401).send({
        status: 401,
        error: 'Unauthorized',
        message: 'Unauthorized',
      });
    }

    return res.status(200).send([
      {
        name: 'Little Bee Admin',
        userid: 'admin_uuid',
        role: 'admin',
      },
      {
        name: 'Little Bee User',
        userid: 'user_uuid',
        role: 'user',
      },
      {
        name: 'Little Bee Guest',
        userid: 'guest_uuid',
        role: 'guest',
      },
    ]);
  },
  'POST /api/login/account': (req: Request, res: Response) => {
    const { password, userName } = req.body;
    if (password === 'admin' && userName === 'admin') {
      res.status(200).send({
        status: 'ok',
        currentAuthority: 'admin',
        token: {
          access_token: 'admin_token',
          token_type: 'Bearer',
          expires_at: 1580827314,
        },
      });
      return;
    }
    if (password === 'admin' && userName === 'user') {
      res.status(200).send({
        status: 'ok',
        currentAuthority: 'user',
        token: {
          access_token: 'user_token',
          token_type: 'Bearer',
          expires_at: 1580827314,
        },
      });
      return;
    }
    res.status(401).send({
      status: 'error',
      currentAuthority: 'guest',
    });
  },
  'POST /api/register': (req: Request, res: Response) => {
    res.status(200).send({ status: 'ok', currentAuthority: 'user' });
  },
  'GET /api/500': (req: Request, res: Response) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req: Request, res: Response) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req: Request, res: Response) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req: Request, res: Response) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },

  'GET  /api/login/captcha': getFakeCaptcha,
};
