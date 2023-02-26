export abstract class BaseLocalStorageRepository {
  protected get = (key: string) => localStorage.getItem(key);

  protected set = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  protected remove = (key: string) => {
    localStorage.removeItem(key);
  };
}
