import { Component, Input } from '@angular/core';
import Announcement from '../../models/announcement.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-announcement-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcement-item.component.html',
  styleUrl: './announcement-item.component.css'
})
export class AnnouncementItemComponent {

  @Input() announcement: Announcement|null = null;

}
