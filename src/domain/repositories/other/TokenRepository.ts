import { ITokenRepository } from './interfaces/ITokenRepository';
import { BaseCookieRepository } from './BaseCookieRepository';

export class TokenRepository extends BaseCookieRepository implements ITokenRepository {
  private readonly accessTokenKey = 'access_token';

  private readonly refreshTokenKey = 'refresh_token';

  public setAccessToken = (token: string): void => this.set(this.accessTokenKey, token);

  public getAccessToken = (): string | undefined => this.get(this.accessTokenKey);

  public removeAccessToken = (): void => this.remove(this.accessTokenKey);

  public setRefreshToken = (token: string): void => this.set(this.refreshTokenKey, token);

  public getRefreshToken = (): string | undefined => this.get(this.refreshTokenKey);

  public removeRefreshToken = (): void => this.remove(this.refreshTokenKey);
}

export const tokenRepository = new TokenRepository();
