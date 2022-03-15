import {Photographer} from "../models/photographer.model";
import {CachePool} from "../cache/cache-pool";

export class PhotographerRepository {
  /**
   * @returns {Promise<Array<Photographer>>}
   */
  static getPhotographers() {
    return CachePool.get(
      'photographers',
      () => fetch('build/data/photographers.json')
        .then(res => res.json())
        .then(data => data.photographers)
    ).then(photographers => photographers.map(photographer => new Photographer(photographer)));
  }

  /**
   * @param id {int}
   *
   * @returns {Promise<Photographer>}
   */
  static getPhotographer(id) {
    return CachePool.get(
      `photographer_${id}`,
      () => fetch('build/data/photographers.json')
        .then(res => res.json())
        .then(data => data.photographers)
        .then(photographers => photographers.find(photographer => photographer.id === id))
    ).then(photographer => new Photographer(photographer));
  }
}