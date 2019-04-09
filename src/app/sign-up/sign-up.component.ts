import { Component, OnInit } from '@angular/core';
import { emaildesgens } from './email';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
email: emaildesgens = {
  mail:'ici votre adresse mail',
}
  constructor() { }

  ngOnInit() {
  }

}
