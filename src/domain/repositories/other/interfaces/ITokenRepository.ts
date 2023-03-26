export interface ITokenRepository {
  setAccessToken: (token: string) => void;

  getAccessToken: () => string | undefined;

  removeAccessToken: () => void;
}
