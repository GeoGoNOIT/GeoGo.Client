import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../models/Game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-details-game',
  templateUrl: './details-game.component.html',
  styleUrls: ['./details-game.component.css']
})
export class DetailsGameComponent implements OnInit {
  //path games/:id
  id: number;
  game: Game;
  constructor(private route: ActivatedRoute, private gameService: GameService) {
    this.route.url.subscribe(res => {
      this.id = res['id'];
      this.gameService.getGame(this.id).subscribe(res => {
        this.game = res;
      })
    })
  }

  ngOnInit(): void {
  }


}
