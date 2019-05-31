import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from './storage.service';
import { AppSettings } from './app.settings';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationValidationService {

  constructor(
    private storageService: StorageService,
    private router: Router,
  ) { }

  canActivate() {
    if (this.storageService.getItem(AppSettings.TOKEN_KEY)) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
