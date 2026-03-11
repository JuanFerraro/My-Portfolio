import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header'
import { Navigation } from './core/navigation/navigation'
import { Projects } from './features/projects/projects';
import { Experience } from './features/experience/experience';
import { Education } from './features/education/education';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navigation, Projects, Experience, Education],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My-Portfolio');
}
