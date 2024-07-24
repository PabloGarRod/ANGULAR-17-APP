import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, UserComponent],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
  styles: ``,
})
export class AppComponent {
  city = 'Barcelona';
  title = 'angular-17-app';
}
