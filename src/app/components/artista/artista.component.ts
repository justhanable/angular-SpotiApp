import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista:any = {};
  loadingArtists: boolean;
  topTracks: any[] = [];


  constructor( private router:ActivatedRoute,
                private spotify: SpotifyService) {
                  this.loadingArtists = true;

    this.router.params.subscribe( params => {
        this.getArtista(params ['id']);
        this.getTopTracks(params ['id']);
    });

  }

  getArtista(id: string) {

    this.loadingArtists = true;

    this.spotify.getArtista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      this.loadingArtists = false;

    });

  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks;
      console.log(topTracks);
    });

  }

}
