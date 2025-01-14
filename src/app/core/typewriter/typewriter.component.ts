import { Component } from '@angular/core';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [],
  templateUrl: './typewriter.component.html',
  styleUrl: './typewriter.component.scss'
})
export class TypewriterComponent {

  private i: number = 0;
  public text: string = 'Lorem ipsum dummy text blabla.';
  private speed: number = 50;

  typeWriter() {

    if (this.i < this.text.length) {

      document.querySelector('.demo')!.innerHTML += this.text[this.i];
      this.i++;
      setTimeout(() => this.typeWriter(), this.speed);
    }

  }
}
