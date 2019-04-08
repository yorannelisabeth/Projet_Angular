import { Routes } from '@angular/router';
import { UserProfilComponent } from "./user-profil/user-profil.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const ROUTES: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'user-profil', component: UserProfilComponent },
  {path: '', redirectTo:"user-profil", pathMatch:"full"}
];

export { ROUTES };