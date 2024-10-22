import { Injectable } from '@angular/core';
import { RestClientService } from '../restClient/rest-client.service';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private restClient: RestClientService) { }

  loginUser(user:any) {
    const request = {
      username : user.username,
      password : user.password
    }

    const promise = new Promise((resolve, reject) => {

      this.restClient.execute('', request).subscribe(
        (res:any) => {},
        (error:any) => {}
      ) 
    })
  }
}



