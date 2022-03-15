import {PhotographerRepository} from "../repositories/photographer.repository";
import {PhotographerComponent} from "./photographer.component";

export class PhotographerListComponent {
  constructor() {
    PhotographerRepository.getPhotographers()
      .then(photographers => photographers
        .map(photographer => new PhotographerComponent(photographer))
        .map(photographer => photographer.e)
        .forEach(photographer => document.querySelector('main').appendChild(photographer))
      );
  }
}
