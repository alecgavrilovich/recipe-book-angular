import { Component } from "@angular/core";
// import { DataStorageService } from '../../../shared/data-storage.service'
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  isCollapsed = false;

  constructor(
    // private dataStorageService: DataStorageService,
    public authService: AuthService,
    private router: Router
  ) {}
  // onSaveData() {
  //   this.dataStorageService.storeRecipes().subscribe(response => {
  //     console.log(response)
  //   })
  // }
  // onFetchData() {
  //   this.dataStorageService.getRecipes()
  // }

  userShoppingList() {
    this.authService.isAuthenticated().subscribe(res => {
      if (res !== null) {
        this.router.navigate(["/shopping-list"]);
      } else {
        this.router.navigate(["/signin"]);
      }
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(["/signin"]);
  }
}
