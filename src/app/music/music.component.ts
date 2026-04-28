import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, BehaviorSubject } from 'rxjs';
import { Music } from '../models/music';
import { MusicService } from '../services/music.service';
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
export class MusicComponent implements OnInit {
  musicArray$: Observable<Music[]>;

  currentIndex = 0;
  consoleImage: string = '/assets/public/music/console.jpg';
  drumsImage: string = '/assets/public/music/drumset.JPG';
  moodieboyImage: string = '/assets/public/music/moodieboy.jpg';
  selectedGenre: string | null = null;
  selectedRole: string | null = null;
  allGenres: string[] = [];
  allRoles: string[] = [];
  filteredMusic$: Observable<Music[]>;

  // @ViewChildren('titleCard') titleCards!: QueryList<ElementRef>;

  constructor(
    private sanitizer: DomSanitizer,
    private musicService: MusicService,
  ) {
    this.musicArray$ = this.musicService.getMusic();
    this.filteredMusic$ = this.musicArray$;
    // Initialize filters immediately
    this.allGenres = this.musicService.getAllGenres();
    this.allRoles = this.musicService.getAllProductionRoles();
  }

  ngOnInit() {
    // Lifecycle hook - filters are initialized in constructor
  }

  filterMusic(type: 'genre' | 'role', value: string) {
    if (type === 'genre') {
      this.selectedGenre = this.selectedGenre === value ? null : value;
    } else {
      this.selectedRole = this.selectedRole === value ? null : value;
    }
    this.applyFilters();
  }

  private applyFilters() {
    const filtered = this.musicService.getFilteredMusic(this.selectedGenre, this.selectedRole);
    this.filteredMusic$ = new BehaviorSubject(filtered).asObservable();
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onSlideChange(event: { item: Music, index: number }) {
    this.currentIndex = event.index;
  }
}
