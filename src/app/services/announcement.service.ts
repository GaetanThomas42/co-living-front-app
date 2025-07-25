import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import Announcement from '../models/announcement.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  private apiUrl: string = 'https://atelier-de-toril.fr/api/announcements/';
  private  httpClient: HttpClient = inject(HttpClient);

  getAll(): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>(this.apiUrl,{
      headers: {
        "Accept":"application/json"
      }
    });
  }

  getById(id: number): Observable<Announcement> {
    return this.httpClient.get<Announcement>(this.apiUrl + id,{
      headers: {
        "Accept":"application/json",
      }
    });
  }

}
