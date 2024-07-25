import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  username = 'PabloDev';
  isLoggedIn = false;
  favGame = '';

  getFavorite(gameName: string) {
    this.favGame = gameName;
  }

  greet() {
    alert(`Hola ${this.username}!`);
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
    this.favGame = '';
  }
}
