import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header'
import { Navigation } from './core/navigation/navigation'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My-Portfolio');
}
