import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
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
export class MusicComponent implements AfterViewInit {
  musicArray: Music[] = musicArray;
  currentIndex = 0;
  consoleImage: string = '/assets/public/music/console.jpg';
  drumsImage: string = '/assets/public/music/drumset.JPG';
  moodieboyImage: string = '/assets/public/music/moodieboy.jpg';

  @ViewChildren('titleCard') titleCards!: QueryList<ElementRef>;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngAfterViewInit(): void {
    this.setupScrollAnimations();
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onSlideChange(event: { item: Music, index: number }) {
    this.currentIndex = event.index;
  }

  private setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in')
          }, index * 100);
        } else {
          entry.target.classList.remove('animate-in')
        }
      })
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    })

    this.titleCards.forEach(card => {
      observer.observe(card.nativeElement);
    })
  }
}
