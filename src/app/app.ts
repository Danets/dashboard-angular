import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './shared/components/layout/navigation/navigation';
import { Header } from './shared/components/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'dashboard-angular';
}
