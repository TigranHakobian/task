export class Product {
  public id: number;
  public title: string;
  public description: string;
  public price: number;
  public category:string;
  public imageUrl: string;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    category:string,
    imageUrl: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
    this.imageUrl = imageUrl;
  }
}
