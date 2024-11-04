import { Component, OnInit } from '@angular/core';
import { ClientInterface } from './client-interface';
import { RestClientService } from 'src/app/core/services/restClient/rest-client.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-shop-client',
  templateUrl: './shop-client.component.html',
  styleUrls: ['./shop-client.component.css']
})
export class ShopClientComponent implements OnInit {

  clients: any
  constructor(
    private router: Router, 
    private restClientService: RestClientService,
  ) { }


  list_client(){
    const promise = new Promise((resolve,rejects) => {
      this.restClientService.executeGet('client/').subscribe(
        (res:any) => {
          this.clients = res
        },
        (error: any) => {
          Swal.fire({
            title: "Error when data is wrong !",
            text: "Impossible de lister les clients!",
            icon: "error"
          });  
        }
      )
    })
  }

  ngOnInit(): void {
    this.list_client()
  }

}
