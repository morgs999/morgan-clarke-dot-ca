import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { Music } from '../models/music';
import { musicArray } from './musicArray';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'music',
  imports: [CommonModule, CarouselComponent, MatCardModule, MatIconModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss',
  schemas: []
})
export class MusicComponent {
  musicArray: Music[] = musicArray;
  currentIndex = 0;
  consoleImage: string = '/assets/public/music/console.jpg';
  drumsImage: string = '/assets/public/music/drumset.JPG';
  moodieboyImage: string = '/assets/public/music/moodieboy.jpg';

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onSlideChange(event: { item: Music, index: number }) {
    this.currentIndex = event.index;
  }
}
