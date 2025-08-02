import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { MatCardModule } from '@angular/material/card';

interface Icon {
  name: string;
  path: string;
  color?: string;
  url: string;
}

const iconList: Icon[] = [
  { name: 'Coding', path: '/assets/public/svgs/code.svg', url: '/codes' },
  { name: 'Music', path: '/assets/public/svgs/music.svg', url: '/music' },
  { name: 'Podcasts', path: '/assets/public/svgs/podcast.svg', url: '/podcasts' },
  { name: 'My Blog', path: '/assets/public/svgs/blog.svg', url: 'blog' },
  { name: 'Writing', path: '/assets/public/svgs/write.svg', url: 'writes' }
]

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  iconList = iconList;
}
