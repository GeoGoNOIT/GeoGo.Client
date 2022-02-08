import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../models/Game';
import { GameService } from '../services/game.service';
import {map, mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-details-game',
  templateUrl: './details-game.component.html',
  styleUrls: ['./details-game.component.css']
})
export class DetailsGameComponent implements OnInit {
  // path games/:id
  id: number;
  game: Game;
  constructor(private route: ActivatedRoute, private gameService: GameService) {
    this.fetchData();
  }

  fetchData() {
    this.route.params.pipe(map(params => {
      const id = params['id'];
      return id;
    }), mergeMap(id => this.gameService.getGame(id))).subscribe(res => {
      this.game = res;
    })
  }

  ngOnInit(): void {
  }


}
