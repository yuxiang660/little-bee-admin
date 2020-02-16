import { getPageAuthority, getRoleAuthority } from './page-authority';

describe('getPageAuthority tests', () => {
  it('should return authority for each route', (): void => {
    const routes = [
      { path: '/user', name: 'user', authority: ['user'], exact: true },
      { path: '/admin', name: 'admin', authority: ['admin'], exact: true },
    ];
    expect(getPageAuthority('/user', routes)).toEqual(['user']);
    expect(getPageAuthority('/admin', routes)).toEqual(['admin']);
  });

  it('should return inherited authority for unconfigured route', (): void => {
    const routes = [
      { path: '/nested', authority: ['admin', 'user'], exact: true },
      { path: '/nested/user', name: 'user', exact: true },
    ];
    expect(getPageAuthority('/nested/user', routes)).toEqual(['admin', 'user']);
  });

  it('should return authority for configured route', (): void => {
    const routes = [
      { path: '/nested', authority: ['admin', 'user'], exact: true },
      { path: '/nested/user', name: 'user', authority: ['user'], exact: true },
      { path: '/nested/admin', name: 'admin', authority: ['admin'], exact: true },
    ];
    expect(getPageAuthority('/nested/user', routes)).toEqual(['user']);
    expect(getPageAuthority('/nested/admin', routes)).toEqual(['admin']);
  });

  it('should return authority for substring route', (): void => {
    const routes = [
      { path: '/nested', authority: ['user', 'users'], exact: true },
      { path: '/nested/users', name: 'users', authority: ['users'], exact: true },
      { path: '/nested/user', name: 'user', authority: ['user'], exact: true },
    ];
    expect(getPageAuthority('/nested/user', routes)).toEqual(['user']);
    expect(getPageAuthority('/nested/users', routes)).toEqual(['users']);
  });
});

describe('getRoleAuthority should be strong', () => {
  it('string', () => {
    expect(getRoleAuthority('admin')).toEqual(['admin']);
  });
  it('array with double quotes', () => {
    expect(getRoleAuthority('"admin"')).toEqual(['admin']);
  });
  it('array with single item', () => {
    expect(getRoleAuthority('["admin"]')).toEqual(['admin']);
  });
  it('array with multiple items', () => {
    expect(getRoleAuthority('["admin", "guest"]')).toEqual(['admin', 'guest']);
  });
});
