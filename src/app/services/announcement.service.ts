import { inject, Injectable } from '@angular/core';
import Announcement from '../models/announcement.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  private httpClient = inject(HttpClient);

  getAll(): Observable<Announcement[]>{
    return this.httpClient.get<Announcement[]>('http://51.254.112.67/api/announcements',
      {
        headers: {'accept': 'application/json'},
        
      });
  }

  getByID(id:number){

  }

  create(){

  }

  edit(){

  }

  deleteByID(){

  }
}
