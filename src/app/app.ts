import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo');
  isClicked = false;

  animateButton() {
    this.isClicked = true;
    // Reset after animation completes
    setTimeout(() => {
      this.isClicked = false;
    }, 300);
  }
}
