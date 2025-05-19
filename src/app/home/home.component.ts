import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  back_end = [
    { name: 'Node JS' },
    { name: 'Express JS' },
    { name: 'Python' },
    { name: 'C++' },
    { name: 'Restful APIs' },
    { name: 'Databases' }
  ]
}
