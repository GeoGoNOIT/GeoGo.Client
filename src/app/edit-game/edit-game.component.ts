import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../models/Game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  gameForm: FormGroup;
  gameId: number;
  game: Game;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private gameService: GameService,
    private router: Router
  )
  { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gameId = params['id'];
      this.gameService.getGame(this.gameId).subscribe(res => {
        this.game = res;
        this.gameForm = this.fb.group({
          'id': [this.game.id],
          'title': [this.game.Name],
          'description': [this.game.Description],
        })
      })
    })
  }

  editGame() {
    this.gameService.editGame(this.gameForm.value).subscribe(res => {
      this.router.navigate(["games"])
    })
  }
}
