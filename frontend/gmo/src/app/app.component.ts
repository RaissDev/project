import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GoogleMapsModule} from '@angular/google-maps';
import { HomePageComponent } from './admin/home-page/home-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GoogleMapsModule, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gmo';
}
