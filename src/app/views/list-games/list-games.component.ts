import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../models/Game';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {
  games: Array<Game>
  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.fetchGames();
  }

  fetchGames() {
    this.gameService.getGames().subscribe(games => {
      this.games = games;
    })
  }

  editGame(id) {
    this.router.navigate(["cats", id, "edit"])
  }

  deleteGame(id) {
    this.gameService.deleteGame(id).subscribe(res => {
      this.fetchGames();
    })
  }
}
