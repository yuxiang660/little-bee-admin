import pathRegexp from 'path-to-regexp';
import { Route } from '@/models/connect';

export type PageAuthorityType = undefined | string | string[];

export const getPageAuthority: (path: string, routeData: Route[]) => PageAuthorityType = (
  path: string,
  routeData: Route[],
) => {
  let authorities: string[] | string | undefined;
  routeData.forEach(route => {
    // match prefix
    if (pathRegexp(`${route.path}/(.*)`).test(`${path}/`)) {
      if (route.authority) {
        authorities = route.authority;
      }
      // exact match
      if (route.path === path) {
        authorities = route.authority || authorities;
      }
      // get children authority recursively
      if (route.routes) {
        authorities = getPageAuthority(path, route.routes) || authorities;
      }
    }
  });
  return authorities;
};

// use localStorage to store the authority info, which might be sent from server in actual project.
export function getRoleAuthority(str?: string): string | string[] {
  const authorityString =
    typeof str === 'undefined' && localStorage ? localStorage.getItem('antd-pro-authority') : str;
  // authorityString could be admin, "admin", ["admin"]
  let authority;
  try {
    if (authorityString) {
      authority = JSON.parse(authorityString);
    }
  } catch (e) {
    authority = authorityString;
  }
  if (typeof authority === 'string') {
    return [authority];
  }
  // preview.pro.ant.design only do not use in your production.
  // preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  if (!authority && ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return ['admin'];
  }
  return authority;
}

export function setRoleAuthority(authority: string | string[]): void {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  localStorage.setItem('antd-pro-authority', JSON.stringify(proAuthority));
}

export function filterWithAuthority<T, K>(
  pageAuthority: PageAuthorityType,
  target: T,
  unAuthorized: K,
): T | K {
  // 没有判定权限.默认查看所有
  // Retirement pageAuthority, return target;
  if (!pageAuthority) {
    return target;
  }
  const currentAuthority = getRoleAuthority();
  // 数组处理
  if (Array.isArray(pageAuthority)) {
    if (Array.isArray(currentAuthority)) {
      if (currentAuthority.some(item => pageAuthority.includes(item))) {
        return target;
      }
    } else if (pageAuthority.includes(currentAuthority)) {
      return target;
    }
    return unAuthorized;
  }
  // string 处理
  if (typeof pageAuthority === 'string') {
    if (Array.isArray(currentAuthority)) {
      if (currentAuthority.some(item => pageAuthority === item)) {
        return target;
      }
    } else if (pageAuthority === currentAuthority) {
      return target;
    }
    return unAuthorized;
  }
  throw new Error('unsupported page authority');
}
