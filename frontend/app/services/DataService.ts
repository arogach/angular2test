import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class DataService {
  constructor(http: Http) {}

  getPokemonList():void {
      return console.log('Return from getPokemonList');
  }
}
