import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsCarouselComponent } from './carousel.component';

describe('ComponentsCarouselComponent', () => {
  let component: ComponentsCarouselComponent;
  let fixture: ComponentFixture<ComponentsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
