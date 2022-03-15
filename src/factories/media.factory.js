import {Image, Video} from "../models/media.model";

/**
 * @param media {Media}
 *
 * @returns {HTMLElement}
 */
export const createMediaDom = (media) => {
  const article = document.createElement('article');
  article.classList.add('media');

  if (media instanceof Image) {
    const image = document.createElement('img');
    image.classList.add('image');
    image.alt = media.title;
    image.src = `build/images/medias/${media.image}`;
    article.appendChild(image);
  } else if (media instanceof Video) {
    const video = document.createElement('video');
    video.classList.add('video');
    video.alt = media.title;
    video.src = `build/images/medias/${media.video}`;
    article.appendChild(video);
  }

  const caption = document.createElement('div');
  caption.classList.add('media-caption');
  article.appendChild(caption);

  const title = document.createElement('h2');
  title.classList.add('title');
  title.textContent = media.title;
  caption.appendChild(title);

  const likes = document.createElement('span');
  likes.classList.add('likes');
  likes.textContent = media.likes;
  caption.appendChild(likes);

  return article;
}

/**
 * @param media {Media}
 *
 * @returns {HTMLElement}
 */
export const createLightboxMediaDom = (media) => {
  const article = document.createElement('article');
  article.classList.add('media');

  if (media instanceof Image) {
    const image = document.createElement('img');
    image.classList.add('image');
    image.alt = media.title;
    image.src = `build/images/medias/${media.image}`;
    article.appendChild(image);
  } else if (media instanceof Video) {
    const video = document.createElement('video');
    video.setAttribute('controls', 'controls');
    video.setAttribute('autoplay', true);
    video.classList.add('video');
    video.alt = media.title;
    video.src = `build/images/medias/${media.video}`;

    const source = document.createElement('source');
    source.src = `build/images/medias/${media.video}`;
    source.type = 'video/mp4';
    video.appendChild(source);

    article.appendChild(video);
  }

  const caption = document.createElement('div');
  caption.classList.add('media-caption');
  article.appendChild(caption);

  const title = document.createElement('h2');
  title.classList.add('title');
  title.textContent = media.title;
  caption.appendChild(title);

  return article;
}