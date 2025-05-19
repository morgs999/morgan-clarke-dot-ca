import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app;
  private analytics;

  constructor() {
    const firebaseConfig = {
      apiKey: process.env['FIREBASE_API_KEY'],
      authDomain: "morganclarke-ca.firebaseapp.com",
      projectId: "morganclarke-ca",
      storageBucket: "morganclarke-ca.firebasestorage.app",
      messagingSenderId: "728518785192",
      appId: "1:728518785192:web:07e7f64e4b5d866a83aa9d",
      measurementId: "G-GF9YM0E77H"
    };
    this.app = initializeApp(firebaseConfig);
    this.analytics = getAnalytics(this.app);
  }

  getApp() {
    return this.app;
  }
  getAnalytics() {
    return this.analytics;
  }
}
