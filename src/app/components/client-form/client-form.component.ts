import { Component, OnInit } from '@angular/core';
import { ClientInterface } from './client-interface';
import { Router } from '@angular/router';
import { RestClientService } from 'src/app/core/services/restClient/rest-client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  clients: ClientInterface = {}

  constructor(
    private router: Router, 
    private restClientService: RestClientService,
  ) { }

  create_client() {
    const request = {
      username: this.clients.username,
      password: this.clients.password,
      number: this.clients.number,
      groups: 1,
      user_permissions: 1
    }

    if (!this.clients.username){
      Swal.fire({
        title: "Remplissez le champ!!",
        text: "Le username est vide !",
        icon: "error"
      });
    }

    const promise = new Promise((resolve, reject) => {
      this.restClientService.execute('client/', request).subscribe(
        (res:any) => {
          this.clients = res
          console.log(this.clients)          
          this.router.navigate(['/clients'])
        },
        (error:any) => {
          console.log(error)   
          Swal.fire({
            title: "Error when data is wrong !",
            text: "Client a un probleme  !",
            icon: "error"
          });  
      }
      )

    })
  }

  ngOnInit(): void {
  }

}
