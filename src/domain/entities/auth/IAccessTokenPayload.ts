export interface IAccessTokenPayload {
  exp: number;
  iat: number;
  roles: { id: string, role: string }[];
}
