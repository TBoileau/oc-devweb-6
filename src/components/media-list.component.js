import {PhotographerRepository} from "../repositories/photographer.repository";
import {MediaRepository} from "../repositories/media.repository";
import {MediaComponent} from "./media.component";
import {EventDispatcher} from "../event-dispatcher/event-dispatcher";
import {DropdownComponent} from "./dropdown.component";
import {LightboxComponent} from "./lightbox.component";

export class MediaListComponent {
  constructor(id) {
    /**
     * @type {MediaComponent[]}
     */
    this.medias = [];
    this.lightbox = new LightboxComponent()
    this.eventDispatcher = new EventDispatcher();
    this.eventDispatcher.register('sort');
    this.eventDispatcher.addEventListener('sort', this.sort.bind(this));

    PhotographerRepository.getPhotographer(id)
      .then(photographer => {
        document.querySelector('.name').textContent = photographer.name;
        document.querySelector('.city').textContent = photographer.city;
        document.querySelector('.tagline').textContent = photographer.tagline;
        document.querySelector('.portrait').src = `build/images/portraits/${photographer.portrait}`;
        document.querySelector('.portrait').alt = photographer.name;
        return photographer;
      })
      .then(photographer => {
        MediaRepository.getMediasByPhotographer(photographer)
          .then(medias => this.medias = medias
            .map(media => new MediaComponent(media, this.open.bind(this)))
          )
          .then(() => {
            this.medias.forEach(media => document.querySelector('.media-list').appendChild(media.e));
            new DropdownComponent(document.querySelector('.dropdown'), this.eventDispatcher);
          });
      });
  }

  open(media) {
    this.lightbox.open(this.medias.map(media => media.media), media);
  }

  render() {
    this.medias.forEach((mediaComponent, index) => {
      mediaComponent.e.style.order = index;
    });
  }

  /**
   *
   * @param by {string}
   */
  sort(by) {
    this.medias = this.medias
      .sort((a, b) => {
        switch (by) {
          case 'Popularité':
            return a.media.likes < b.media.likes ? 1 : -1;
          case 'Titre':
            return a.media.title < b.media.title ? -1 : 1;
          case 'Date':
            return a.media.date < b.media.date ? 1 : -1;
        }
      });
    this.render();
  }
}