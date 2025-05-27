import { Component, OnInit } from '@angular/core';
import { TypewriterComponent } from '../core/typewriter/typewriter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent extends TypewriterComponent {}
