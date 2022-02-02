import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-game-details',
  templateUrl: './create-game-details.component.html',
  styleUrls: ['./create-game-details.component.css']
})
export class CreateGameDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }

}
