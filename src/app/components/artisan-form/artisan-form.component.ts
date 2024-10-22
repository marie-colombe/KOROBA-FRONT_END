import { Component, OnInit } from '@angular/core';
import { ArtisanInterface } from './artisan-interface';
import { RestClientService } from 'src/app/core/services/restClient/rest-client.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-artisan-form',
  templateUrl: './artisan-form.component.html',
  styleUrls: ['./artisan-form.component.css']
})
export class ArtisanFormComponent implements OnInit {

  artisan : ArtisanInterface = {}

  constructor(
    private restClientService : RestClientService,
    private router : Router
  ) { }

  create_artisan(){
    const request = {
        username: this.artisan.username,
        work: this.artisan.work,
        sex: this.artisan.sex,
        number: this.artisan.number,
        whatsapp_number: this.artisan.whatsapp_number,
        pseudo: this.artisan.pseudo,
        picture: null,
        password: this.artisan.password
    }

    console.log('request : ' + request)
    
    const promise = new Promise((resolve,rejects) => {
      this.restClientService.execute('/artisan/', request).subscribe(
        (res:any) => {
            Swal.fire({
              title: "Good job!",
              text: "Artisan a bien été créé  !",
              icon: "success"
            });
            this.router.navigate(['/trouver_artisan'])
        },
        (error:any) => {
          console.log(`artisan : ${JSON.stringify(this.artisan)}`)
          Swal.fire({
            title: 'Erreur!',
            text: `Probleme pour la creation de l'artisan!`,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        }
      )
    }) 
  }

  getAllArtisan(artisanId?:any){
    if (artisanId){
      const promise = new Promise((resolve,rejects) => {
        this.restClientService.executeGet(`artisan/${artisanId}/`).subscribe(
          (res:any) => {},
          (error:any) => {}
        )
      })
    } else {
      const promise = new Promise((resolve,rejects) => {
        this.restClientService.executeGet(`artisan/`).subscribe(
          (res:any) => {
            Swal.fire({
              title: "Good job!",
              text: "You clicked the button!",
              icon: "success"
            });
          },
          (error:any) => {
            Swal.fire({
              title: 'Error!',
              text: 'Error when you want to insert data !',
              icon: 'error',
              confirmButtonText: 'Cool'
            })
          }
        )
      })
    }
    
  }

  updateArtisan(artisanId:any){
    const request = {
      id : this.artisan.id,
      username : this.artisan.username,
      work : this.artisan.work,
      sex : this.artisan.sex,
      number : this.artisan.number,
      whatsapp_number : this.artisan.whatsapp_number,
      pseudo : this.artisan.pseudo,
      picture : this.artisan.picture,
      password : this.artisan.password,
    }

    const promise = new Promise((resolve,rejects) => {
      this.restClientService.executeUpdate(`artisan/${artisanId}/`, request).subscribe(
        (res:any) => {},
        (error:any) => {
          Swal.fire({
            title: 'Error!',
            text: 'Error when you want to update data !',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        }
      )
    })
  }

  deleteArtisan(artisanId:any){
    const promise = new Promise((resolve,rejects) => {
      this.restClientService.executeDelete(`artisan/${artisanId}/`).subscribe(
        (res:any) => {},
        (error:any) => {
          Swal.fire({
            title: 'Error!',
            text: 'Error when you want to delete data !',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        }
      )
    })
  }




  ngOnInit(): void {
  }

}
