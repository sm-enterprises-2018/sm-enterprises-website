import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

 currentImageIndex: number = 0;
  totalImages: number = 6;
  intervalId!: number;

  startX: number = 0;
  endX: number = 0;

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      this.intervalId = window.setInterval(() => {
        this.nextImage();
      }, 3000);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.totalImages;
  }

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.totalImages) % this.totalImages;
  }

  startTouch(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  endTouch(event: TouchEvent) {
    this.endX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  handleSwipe() {
    const swipeDistance = this.startX - this.endX;
    if (swipeDistance > 50) {
      this.nextImage();
    } else if (swipeDistance < -50) {
      this.prevImage();
    }
  }
}
