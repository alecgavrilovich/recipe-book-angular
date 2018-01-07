import { Ingredient } from "./../../shared/ingridient.model";

export interface Recipe {
  name: string;
  desc: string;
  imagePath: string;
  uid: string;
  ingredients: Ingredient[];
}

export class RecipeModel implements Recipe {
  // public name: string;
  // public desc: string;
  // public imagePath: string;
  // public uid: string
  // public ingredients: Ingredient[]

  constructor(
    public name: string,
    public desc: string,
    public imagePath: string,
    public uid: string,
    public ingredients: Ingredient[]
  ) {}
}
