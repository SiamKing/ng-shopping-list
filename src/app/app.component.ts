import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDHW1t2oBd-XgP7Ey4Jv3ap74LjkJf8gC0",
      authDomain: "udemy-shopping-list-cabf3.firebaseapp.com"
    });
    this.authService.onStateChange();
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
