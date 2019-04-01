import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user-profile'

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']

})
export class UserProfilComponent implements OnInit {
  @Input() label: string = "hidden";
  @Output() onclick = new EventEmitter<string>();

  user: User = {
    nom: "Bob",
    firstName: "Eliza",
    age: 69,
    quote: 'To beer or not to beer..',
    picture: 'https://randomuser.me/api/portraits/lego/2.jpg',
  }


  onClickButton() {
    if (this.label == "hidden") {
      this.label = "visible";
    }
    else {
      this.label = "hidden";
    }
    this.onclick.emit(this.label);
  }

  constructor() { this.user.picture = 'https://randomuser.me/api/portraits/lego/2.jpg' }

  ngOnInit() {
  }

}
