export interface ITokenRepository {
  setAccessToken: (token: string) => void;

  getAccessToken: () => string | null;

  removeAccessToken: () => void;
}
