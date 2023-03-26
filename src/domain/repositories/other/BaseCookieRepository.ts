import Cookies from 'js-cookie';

export abstract class BaseCookieRepository {
  protected get = (key: string) => Cookies.get(key);

  protected set = (key: string, value: string) => {
    Cookies.set(key, value);
  };

  protected remove = (key: string) => {
    Cookies.remove(key);
  };
}
