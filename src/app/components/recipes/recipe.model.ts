import { Ingredient } from './../../shared/ingridient.model'

export interface Recipe {
  name: string
  description: string
  imagePath: string
  ingredients: Ingredient[]
}

export class RecipeModel implements Recipe {
  public name: string
  public description: string
  public imagePath: string
  public ingredients: Ingredient[]

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name
    this.description = desc
    this.imagePath = imagePath
    this.ingredients = ingredients
  }
}
