import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {
  message = 'LIKE';
  disabledButton = false;

  clickButton(){
    this.disabledButton = true;
  }
}
