import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from 'src/app/modules/shared/services/storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.storageService.removeAll();
    this.router.navigate(['/login']);
  }

}
