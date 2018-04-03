import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {

  //@Input() id:id;

  public songDetails = [];
  public errorMessage;
  constructor(private route: ActivatedRoute,
    private _dataService:DataServiceService) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    
    console.log(id);
    this._dataService.getSongDetails(id).subscribe(data =>this.songDetails = data,
    error =>this.errorMessage);

  }

}
