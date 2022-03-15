/**
 * @param photographer {Photographer}
 *
 * @returns {HTMLElement}
 */
export const createPhotographerDom = (photographer) => {
  const article = document.createElement('article');
  article.classList.add('photographer');

  const portrait = document.createElement('img');
  portrait.classList.add('portrait');
  portrait.alt = photographer.name;
  portrait.src = `build/images/portraits/${photographer.portrait}`;
  article.appendChild(portrait);

  const name = document.createElement('h2');
  name.classList.add('name');
  name.textContent = photographer.name;
  article.appendChild(name);

  const city = document.createElement('span');
  city.classList.add('city');
  city.textContent = photographer.city;
  article.appendChild(city);

  const tagline = document.createElement('span');
  tagline.classList.add('tagline');
  tagline.textContent = photographer.tagline;
  article.appendChild(tagline);

  const price = document.createElement('span');
  price.classList.add('price');
  price.textContent = `${photographer.price}€/jour`;
  article.appendChild(price);

  return article;
}