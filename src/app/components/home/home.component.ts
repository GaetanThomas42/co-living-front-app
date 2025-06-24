import { Component, inject, OnInit } from '@angular/core';
import Announcement from '../../models/announcement.interface';

import { CommonModule } from '@angular/common';
import { AnnouncementItemComponent } from "../announcement-item/announcement-item.component";
import { AnnouncementService } from '../../services/announcement.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AnnouncementItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  private announcementService: AnnouncementService = inject(AnnouncementService);

  private userService:UserService = inject(UserService);

  title: string = 'Mes annonces';
  announcements: Announcement[] = [];

  ngOnInit(): void {

    this.userService.getMe().subscribe(
      {
        next:(user)=>{
          console.log(user);

        },error:(e)=>{
          console.log(e);
        }
      }
    )

  this.announcementService.getAll().subscribe({
    next:(data: Announcement[])=>{
          this.announcements = data;
      },
      error: (error:Error)=>{

      }

    });

  }


}
