import { Component } from 'angular2/core';
import { Http, Headers, HTTP_PROVIDERS } from 'angular2/http';

@Component({
  selector: 'login',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl: './components/auth/login/login.html'
})

export class LoginCmp {
  constructor(public http: Http) {}

  login(event, username, password) {
    event.preventDefault();

    const contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('application', 'x-www-form-urlencoded');
    contentHeaders.append('Content-Type', 'application/json');

    let body = JSON.stringify({ jose: 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ0ZXN0LWFkbWluLWFjYyIsImlzcyI6Imh0dHBzOlwvXC9h' +
    'ZHdhbGwuY29tXC9zZXJ2ZXIiLCJleHAiOjE1NDYyOTM2MDAsImlhdCI6MTQzMzg1NzcwOCwianRpIjoiYWRjMDA2M2EtMGJiMC00NGJjLWJkYmE' +
    'tNTZlYmI4ODhlOTg1In0.hya3hS6ol3f89ph4r4Fd-oTcASYCmtk4aI5EbhTrlGK_-gBHpcA2P1l42rXegYR8uyVrUuS12o0L2Pdw4JjNt9HbWb' +
    '6_CmFaN-DqcIDtUZ_V3-81gTqAbXvoyxS_AoFg7rFy4cqCA4xP7UXiGQ2X7zhV3aIjuHquTNwpaUDE0JQ',
                                nickname: username,
                                status_line1: '',
                                status_line2: '' });

    this.http.post('http://dev.adwall.net:8081/wallet-auth-server/auth/publishers/login', body, { headers: contentHeaders })
      .subscribe(
        response => {
          console.log(response.json());
        },
        error => {
          console.log(error.text());
        }
      );
  }
}
