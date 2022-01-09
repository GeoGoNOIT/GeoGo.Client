import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GameService} from "../services/game.service";

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent {
  gameForm: FormGroup;

  constructor(private fb: FormBuilder, private gameService: GameService) {
    this.gameForm = this.fb.group({
      imageUrl: ['', Validators.required],
      title: ['', Validators.required],
      description: ['']
    })
  }

  get imageUrl(){
    return this.gameForm.get('imageUrl');
  }

  get title(){
    return this.gameForm.get('title');
  }

  get description(){
    return this.gameForm.get('description');
  }

  create(){
    this.gameService.create(this.gameForm.value).subscribe(res => {
      console.log(res)
    })
  }
}
