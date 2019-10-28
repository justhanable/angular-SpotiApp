import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
console.log('Spotify Servie listo');
   }

   getQuery(query:string){

     const url = `https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({
       'Authorization': 'Bearer BQCDyPM22Gd1OzRyjeOODgA9JA89nowE-d9E0WHhuekAd0tF8abKucL20lAZd41ipIdl0MWV4azMUkyIE8QfDf0hkxL7MxZPBmmtk8nFd9u39ZgoqWiAjBi48UgsPErilh2AVsVPPjIqNJOr'
        });

        return this.http.get(url, {headers});
   }

   getNewReleases(){

        return this.getQuery('browse/new-releases?limit=20')
        .pipe(map(data => {
          return data['albums'].items;
        }));

      }

      getArtistas( termino: string){

        return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
        .pipe(map(data => {
          return data['artists'].items;
        }));


      }

      getArtista( id: string){

        return this.getQuery(`artists/${id}`);
      //  .pipe(map(data => {return data['artists'].items;  }));


      }

      getTopTracks( id: string){

        return this.getQuery(`artists/${id}/top-tracks?country=us`)
        .pipe(map(data => {return data['tracks'];  }));


      }


}
