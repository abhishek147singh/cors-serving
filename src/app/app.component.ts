import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cors-serving';

  constructor(private http:HttpClient){}

  setCookie(){
    const url = 'http://localhost:3000/set-cookie';//server1
    this.http.get(url).subscribe({
      next:(response) => {
        console.log('set cookie response', response);
      },
      error:(error) => {
        console.log('set cookie error', error);
      }
    })
  }


  getCookie(){
    const url = 'http://localhost:3000/get-cookie';//server1
    this.http.get(url).subscribe({
      next:(response) => {
        console.log('get cookie response', response);
      },
      error:(error => {
        console.log('get cookie error', error);
      })
    })
  }

  getCookieThroughServerSideProxy(){
    const url = '/get-cookie';//server2
    
    this.http.get(url).subscribe({
      next:(response) => {
        console.log('get cookie server proxy response', response);
      },
      error:(error => {
        console.log('get cookie server proxy error', error);
      })
    })
  }

  setCookieThroughServerSideProxy(){
    const url = '/set-cookie';//server2
    
    this.http.get(url).subscribe({
      next:(response) => {
        console.log('set cookie server proxy response', response);
      },
      error:(error => {
        console.log('set cookie server proxy error', error);
      })
    })
  }
}
