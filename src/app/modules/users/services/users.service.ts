import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiClientService } from '../../shared/services/api-client';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiClientService: ApiClientService) { }

  getUsersList(): Observable<any> {
    return this.apiClientService.get(`users?since=0`);
  }
}
