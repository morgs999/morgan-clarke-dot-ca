import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { Music } from '../models/music';
import { musicArray } from './musicArray';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'music',
  imports: [CommonModule, MatCardModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss',
  schemas: []
})
export class MusicComponent {
  musicArray: Music[] = musicArray;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
