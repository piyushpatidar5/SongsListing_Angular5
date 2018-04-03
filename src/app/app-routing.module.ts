import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { SongsListComponent } from './songs-list/songs-list.component';
import { SongDetailsComponent } from './song-details/song-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactComponent } from './contact/contact.component';

const routes:Routes = [
  {path:'songsList', component:SongsListComponent},
  {path:'songDetails/:id', component:SongDetailsComponent},
  {path:'home', component:HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  {path:'gallary', component:GallaryComponent},
  {path:'contact', component:ContactComponent},
  {path:'about', component:AboutComponent}   
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
