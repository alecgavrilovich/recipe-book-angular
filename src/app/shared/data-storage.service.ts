import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
// import { RecipeService } from '../components/recipes/recipe.service'
import { Recipe } from "../components/recipes/recipe.model";
import { AuthService } from "../components/auth/auth.service";
import { HttpClient, HttpParams, HttpRequest } from "@angular/common/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataStorageService {
  private recipesCollection: AngularFirestoreCollection<Recipe>;

  constructor(
    private afs: AngularFirestore,
    private httpClient: HttpClient,
    // private recipeService: RecipeService,
    private authService: AuthService
  ) {
    this.recipesCollection = this.afs.collection<Recipe>("recipes");
  }

  // storeRecipes() {
  //   const token = this.authService.getToken()
  //   // return this.httpClient.put(
  //   //   +token,
  //   //   ,

  //   //   {
  //   //     observe: 'body',
  //   //     params:
  //   //   }
  //   // )

  //   const req = new HttpRequest(
  //     'PUT',
  //     'https://ng-recipe-book-75db1.firebaseio.com/recipes.json',
  //     this.recipeService.getRecipes(),
  //     {
  //       reportProgress: true,
  //       params: new HttpParams().set('auth', token)
  //     }
  //   )
  //   return this.httpClient.request(req)
  // }

  getRecipesCollection() {
    // console.log(this.afs.collection('recipes'))

    return this.recipesCollection;

    // const token = this.authService.getToken()
    // this.httpClient
    //   .get<Recipe[]>(
    //     'https://ng-recipe-book-75db1.firebaseio.com/recipes.json' + token,
    //     {
    //       observe: 'body',
    //       responseType: 'json'
    //     }
    //   )
    //   .map(recipes => {
    //     for (const recipe of recipes) {
    //       if (!recipe['ingredients']) {
    //         console.log(recipe)
    //         recipe['ingredients'] = []
    //       }
    //     }
    //     return recipes
    //   })
    //   .subscribe((recipes: Recipe[]) => {
    //     this.recipeService.setRecipes(recipes)
    //   })
  }
}
