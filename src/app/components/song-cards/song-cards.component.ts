import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-song-cards', 
  templateUrl: './song-cards.component.html', 
  styleUrls: ['./song-cards.component.css'], 
})
export class SongCardsComponent implements OnInit {  
  @Input() public playlistThumbnail!: string;
  @Input() public title!: string;
  @Input() public description!: string; 

  constructor() {}

  ngOnInit(): void {}
}
