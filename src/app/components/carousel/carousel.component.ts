import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent<T> {
  @Input('items') items: T[] = [];
  @Input() showDots: boolean = true;
  @Input() showNav: boolean = true;
  @Input() showSideSlides: boolean = true;

  @Output() slideChange = new EventEmitter<{ item: T, index: number }>();

  @ContentChild('slideTemplate', { read: TemplateRef }) slideTemplate!: TemplateRef<any>;

  currentIndex: number = 0;

  constructor() { }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.emitSlideChange();
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1) % this.items.length;
    this.emitSlideChange();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.emitSlideChange();
  }

  activeClass(index: number): string {
    if (index === this.currentIndex) return 'active';
    if (this.showSideSlides) {
      if (index === this.getPrevIndex()) return 'prev';
      if (index === this.getNextIndex()) return 'next';
    }
    return 'hidden';
  }

  getPrevIndex(): number {
    return this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1;
  }

  getNextIndex(): number {
    return (this.currentIndex + 1) % this.items.length;
  }

  private emitSlideChange() {
    this.slideChange.emit({
      item: this.items[this.currentIndex],
      index: this.currentIndex
    })
  }
}
