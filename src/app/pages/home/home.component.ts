import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { SongCardsComponent } from '../../components/song-cards/song-cards.component';
import { searchBarService } from '../../services/searchbar.services';



@Component({
  selector: 'app-home',
  imports: [CommonModule,NavBarComponent,SongCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  focusSongs = [
    { thumbnail: '/kailash_.png', title: 'Romantic Songs', description: 'Relax And Indulge With Beautiful Piano Pieces' },
    { thumbnail: '/kailash_.png', title: 'Peaceful Songs', description: 'Relax And Indulge With Beautiful Piano Pieces' },
    { thumbnail: '/kailash_.png', title: 'DJ Songs', description: 'Relax And Indulge With Beautiful Piano Pieces' },
    { thumbnail: '/kailash_.png', title: 'Party Mashup Songs', description: 'Relax And Indulge With Beautiful Piano Pieces' },
    { thumbnail: '/kailash_.png', title: 'HeartBreak Songs', description: 'Relax And Indulge With Beautiful Piano Pieces' },{ thumbnail: '/kailash_.png', title: 'Romantic Songs', description: 'Relax And Indulge With Beautiful Piano Pieces' },
    { thumbnail: '/kailash_.png', title: 'Peaceful Songs', description: 'Relax And Indulge With Beautiful Piano Pieces' }
  ];
  playlistSongs = [
    { thumbnail: '/kailash_.png', title: 'Romantic Songs', description: 'Relax And Indulge With Beautiful Piano Pieces' },
    { thumbnail: '/kailash_.png', title: 'Peaceful Songs', description: 'Relax And Indulge With Beautiful Piano Pieces' },
    { thumbnail: '/kailash_.png', title: 'DJ Songs', description: 'Relax And Indulge With Beautiful Piano Pieces' },
    { thumbnail: '/kailash_.png', title: 'Party Mashup Songs', description: 'Relax And Indulge With Beautiful Piano Pieces' },
    { thumbnail: '/kailash_.png', title: 'HeartBreak Songs', description: 'Relax And Indulge With Beautiful Piano Pieces' },{ thumbnail: '/kailash_.png', title: 'Romantic Songs', description: 'Relax And Indulge With Beautiful Piano Pieces' },
    { thumbnail: '/kailash_.png', title: 'Peaceful Songs', description: 'Relax And Indulge With Beautiful Piano Pieces' }
  ];
  

  constructor(private sb:searchBarService){}
    toggleSearchField(){
      this.sb.toggleSearch();
    }


}


