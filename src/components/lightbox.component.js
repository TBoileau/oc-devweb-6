import {createLightboxMediaDom} from "../factories/media.factory";

export class LightboxComponent {
  constructor() {
    /**
     * @type {Media|null}
     */
    this.current = null;

    /**
     * @type {Media[]}
     */
    this.medias = [];

    this.e = document.querySelector('.lightbox');
    this.e.querySelector('.lightbox-left').addEventListener('click', this.left.bind(this));
    this.e.querySelector('.lightbox-right').addEventListener('click', this.right.bind(this));
    this.e.querySelector('.lightbox-close').addEventListener('click', this.close.bind(this));
  }

  right() {
    const index = this.medias.indexOf(this.current);
    this.current = this.medias[index === this.medias.length - 1 ? 0 : index + 1];
    this.render();
  }

  left() {
    const index = this.medias.indexOf(this.current);
    this.current = this.medias[index === 0 ? this.medias.length - 1 : index - 1];
    this.render();
  }

  render() {
    this.e.querySelector('.lightbox-media').innerHTML = '';
    this.e.querySelector('.lightbox-media').appendChild(createLightboxMediaDom(this.current));
  }

  close(e) {
    e.preventDefault();
    this.e.classList.remove('lightbox-open');
  }

  open(medias, current) {
    this.e.classList.add('lightbox-open');
    this.medias = medias;
    this.current = current;
    this.render();
  }
}