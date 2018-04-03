import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {

  public songs = [];
  public errorMessage = [];
  constructor(private _dataService : DataServiceService) { }

  ngOnInit() {
  
    this._dataService.getSongs()
    .subscribe(data => {this.songs = data;
      console.log(data);
    
    },
                error=> this.errorMessage = error);
  }

}
