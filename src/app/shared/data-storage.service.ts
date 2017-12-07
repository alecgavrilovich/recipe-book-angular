import { Injectable } from '@angular/core'
import { RecipeService } from '../components/recipes/recipe.service'
import { Recipe } from '../components/recipes/recipe.model'
import { AuthService } from '../components/auth/auth.service'
import 'rxjs/add/operator/map'
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http'

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const token = this.authService.getToken()
    // return this.httpClient.put(
    //   +token,
    //   ,

    //   {
    //     observe: 'body',
    //     params:
    //   }
    // )

    const req = new HttpRequest(
      'PUT',
      'https://ng-recipe-book-75db1.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {
        reportProgress: true,
        params: new HttpParams().set('auth', token)
      }
    )
    return this.httpClient.request(req)
  }

  getRecipes() {
    const token = this.authService.getToken()
    this.httpClient
      .get<Recipe[]>(
        'https://ng-recipe-book-75db1.firebaseio.com/recipes.json' + token,
        {
          observe: 'body',
          responseType: 'json'
        }
      )
      .map(recipes => {
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe)
            recipe['ingredients'] = []
          }
        }
        return recipes
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes)
      })
  }
}
