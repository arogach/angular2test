import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class DataService {
  constructor(private http: Http) {}

  getPokemonList():any {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    console.log('run');
    return this.http.get('http://pokeapi.co/api/v1/pokemon/?limit=12', options);
  }
}
