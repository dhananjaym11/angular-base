import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '../../modules/shared/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  handelLoginClick() {
    this.storageService.setItem('isLogin', true);
    this.storageService.setItem('Token', 'test');
    this.router.navigate(['/'])
  }

}
