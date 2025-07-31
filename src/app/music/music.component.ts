import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { Music } from '../models/music';
import { musicArray } from './musicArray';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'music',
  imports: [CommonModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MusicComponent {
  musicArray: Music[] = musicArray;

  constructor(private sanitizer: DomSanitizer) { }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
