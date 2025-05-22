import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

interface Icon {
  name: string;
  path: string;
  color?: string;
}

const iconList: Icon[] = [
  { name: 'Coding', path: './code.svg' },
  { name: 'Music', path: './music.svg' },
  { name: 'Podcasts', path: './podcast.svg' },
  { name: 'My Blog', path: './blog.svg' },
  { name: 'Writing', path: './write.svg' }
]

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  iconList = iconList;
}
