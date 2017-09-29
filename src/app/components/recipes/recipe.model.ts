import { Ingredient } from './../../shared/ingridient.model';

export class Recipe {
  public name: String;
  public description: String;
  public imagePath: String;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
