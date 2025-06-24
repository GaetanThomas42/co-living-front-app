import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../models/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

   private httpClient = inject(HttpClient);

    getMe(): Observable<User>{
      return this.httpClient.get<User>('http://51.254.112.67/api/me',
        {
          headers: {
            'accept': 'application/json',
            'Authorization' : 'Bearer fefeffe'
          },
          params: {"owner.id":12}
        });
    }

}
