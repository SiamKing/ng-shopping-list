import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../recipes/shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private dsService: DataStorageService, private authService: AuthService) {}

  ngOnInit() {
  }

  onSaveData() {
    this.dsService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      )
  }

  onFetchData() {
   this.dsService.getRecipes();
  }

  onLogout() {
    this.authService.logOut();
  }

}
