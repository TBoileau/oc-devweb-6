import './styles/photographer.scss';
import {MediaListComponent} from "./components/media-list.component";

const id = parseInt((new URLSearchParams(window.location.search)).get('id'));

new MediaListComponent(id);



