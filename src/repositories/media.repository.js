import {Photographer} from "../models/photographer.model";
import {Image, Video} from "../models/media.model";
import {CachePool} from "../cache/cache-pool";

export class MediaRepository {
  /**
   * @param photographer {Photographer}
   *
   * @returns {Promise<Array<Media>>}
   */
  static getMediasByPhotographer(photographer) {
    return CachePool.get(
      `media_${photographer.id}`,
      () => fetch('build/data/photographers.json').then(res => res.json())
    ).then(data => data.media
      .filter(media => media.photographerId === photographer.id)
      .map(media => {
        if ('video' in media) {
          return new Video(media);
        }

        return new Image(media);
      })
    );
  }
}