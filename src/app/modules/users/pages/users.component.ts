import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { UsersService } from '../services/users.service';
import { User } from '../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getUsersList()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
      });
  }

}
