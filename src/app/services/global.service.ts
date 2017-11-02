import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {


  constructor() { }
  url: string = 'https://jsonplaceholder.typicode.com';

  ngOnInit(){
    console.log('success');
  }

  getUrl(){
    return this.url;
  }
}
