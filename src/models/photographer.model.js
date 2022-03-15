export class Photographer {
  /**
   * @param id {int}
   * @param name {string}
   * @param city {string}
   * @param country {string}
   * @param tagline {string}
   * @param price {int}
   * @param portrait {string}
   */
  constructor({ id, name, city, country, tagline, price, portrait }) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.country = country;
    this.tagline = tagline;
    this.price = price;
    this.portrait = portrait;
  }
}