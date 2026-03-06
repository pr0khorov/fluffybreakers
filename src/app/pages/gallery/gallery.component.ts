import { Component } from '@angular/core';

interface GalleryItem {
  label: string;
  caption: string;
  color: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  galleryItems: GalleryItem[] = [
    { label: '1', caption: 'Проект Alpha', color: '#667eea' },
    { label: '2', caption: 'Проект Beta', color: '#764ba2' },
    { label: '3', caption: 'Проект Gamma', color: '#f093fb' },
    { label: '4', caption: 'Мероприятие 2024', color: '#4facfe' },
    { label: '5', caption: 'Командная работа', color: '#43e97b' },
    { label: '6', caption: 'Награждение', color: '#fa709a' }
  ];
}
