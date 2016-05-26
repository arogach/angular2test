import {Component} from 'angular2/core';
import {DataService} from '../../services/DataService';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'home',
  templateUrl: './components/home/home.html',
  styleUrls: ['./components/home/home.css'],
  providers: [DataService, HTTP_PROVIDERS]
})
export class HomeCmp {
  constructor(dataService: DataService) {
      dataService.getPokemonList();
  }
}
