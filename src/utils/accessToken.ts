const accessTokenKey = 'access_token';

export interface AccessTokenType {
  access_token: string;
  token_type: string;
  expires_at: number;
}

export function getAccessToken(): string {
  let token: string = '';
  if (sessionStorage.getItem(accessTokenKey)) {
    const accessToken = JSON.parse(sessionStorage.getItem(accessTokenKey) as string);
    token = `${accessToken.token_type} ${accessToken.access_token}`;
  }

  return token;
}

export function setAccessToken(token: AccessTokenType): void {
  sessionStorage.setItem(accessTokenKey, JSON.stringify(token));
}

export function clearAccessToken() {
  sessionStorage.removeItem(accessTokenKey);
}
