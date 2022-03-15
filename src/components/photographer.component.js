import {createPhotographerDom} from "../factories/photographer.factory";

export class PhotographerComponent {
  /**
   * @param photographer {Photographer}
   */
  constructor(photographer) {
    this.photographer = photographer;
    this.e = createPhotographerDom(this.photographer);
    this.e.addEventListener('click', this.onClick.bind(this));
  }

  onClick() {
    window.location.href = `photographer.html?id=${this.photographer.id}`;
  }
}