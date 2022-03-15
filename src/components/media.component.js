import {createMediaDom} from "../factories/media.factory";

export class MediaComponent {
  /**
   * @param media {Media}
   * @param callback {function}
   */
  constructor(media, callback) {
    this.media = media;
    this.e = createMediaDom(this.media);
    this.e.addEventListener('click', () => callback(this.media));
  }
}