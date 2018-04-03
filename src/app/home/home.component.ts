import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public artistData = [];
  public ArtistName;
  public ArtistDetails1;
  public ArtistDetails2;

  constructor(private dataService:DataServiceService){}
  ngOnInit() {
  this.artistData = this.dataService.artistData;
  this.ArtistName=this.artistData[0].name;
this.ArtistDetails1 =this.artistData[0].details1 ;
this.ArtistDetails2 =this.artistData[0].details2;
}
  artistSelected = function (name){
    this.ArtistName=name;
    for(var i=0;i<this.artistData.length;i++){
    if(this.artistData[i].name==name){
    this.ArtistDetails1 =this.artistData[i].details1 ;
    this.ArtistDetails2 =this.artistData[i].details2;
    }};
}

}

