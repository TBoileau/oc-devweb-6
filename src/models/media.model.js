class Media {
  /**
   * @param id {int}
   * @param title {string}
   * @param likes {int}
   * @param date {string}
   * @param price {int}
   */
  constructor({ id, title, likes, date, price}) {
    this.id = id;
    this.title = title
    this.likes = likes;
    this.date = new Date(date);
    this.price = price;
  }
}

export class Image extends Media {
  /**
   * @param props {{image: string, id: int, title: string, likes: int, date: string, price: int}}
   */
  constructor(props) {
    super(props);
    this.image = props.image;
  }
}

export class Video extends Media {
  /**
   * @param props {{video: string, id: int, title: string, likes: int, date: string, price: int}}
   */
  constructor(props) {
    super(props);
    this.video = props.video;
  }
}