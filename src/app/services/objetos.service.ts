import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Objeto } from '../models/objeto';
import {GlobalService} from './global.service';

@Injectable()
export class ObjetosService {
  public url: string;

  constructor(public _http: Http,
              private _url: GlobalService) {
    this.url = _url.getUrl();
  }

  getObjetos() {
    return this._http.get(this.url + '/photos').map(res => res.json());
  }

  addObjeto(objeto: Objeto){
    let json = JSON.stringify(objeto);
    let params = 'json='+json;
    console.log(params);
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    return this._http.post(this.url+'/photos', params, {headers: headers})
      .map(
        res => res.json());
  }
}
