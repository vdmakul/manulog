import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './features/editor/editor.component';
import { LoginComponent } from './features/login/login.component';
import { LandingComponent } from './features/landing/landing.component';

const routes: Routes = [
  { path: 'editor', component: EditorComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
