export class CachePool {
  /**
   * @param key {string}
   * @param promise {function}
   *
   * @return {Promise<any>}
   */
  static get(key, promise) {
    const data = localStorage.getItem(key);

    if (data !== null) {
      return new Promise(resolve => {
        resolve(JSON.parse(data))
      });
    }
    console.log(data)

    return promise().then(data => {
      localStorage.setItem(key, JSON.stringify(data));
      return data;
    });
  }
}