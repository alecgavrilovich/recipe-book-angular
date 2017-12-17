// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBTmGtDFB9Sp1NqZOR4arOF2W1rWXgEdms',
    authDomain: 'ng-recipe-book-75db1.firebaseapp.com',
    databaseURL: 'https://ng-recipe-book-75db1.firebaseio.com',
    projectId: 'ng-recipe-book-75db1',
    storageBucket: 'ng-recipe-book-75db1.appspot.com',
    messagingSenderId: '112634559051'
  }
}
