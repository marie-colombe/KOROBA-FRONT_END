import { Component, OnInit } from '@angular/core';
import { RestClientService } from 'src/app/core/services/restClient/rest-client.service';
import Swal from 'sweetalert2'
import { ArtisanInterface } from '../artisan-form/artisan-interface';


@Component({
  selector: 'app-find-artisan',
  templateUrl: './find-artisan.component.html',
  styleUrls: ['./find-artisan.component.css']
})
export class FindArtisanComponent implements OnInit {

  artisan : any

  constructor(
    private restClientService : RestClientService
  ) { }

  getAllArtisan(artisanId?:any){
    if (artisanId){
      const promise = new Promise((resolve,rejects) => {
        this.restClientService.executeGet(`artisan/${artisanId}/`).subscribe(
          (res:any) => {
            this.artisan = [res]
          },
          (error:any) => {}
        )
      })
    } else {
      const promise = new Promise((resolve,rejects) => {
        this.restClientService.executeGet(`artisan/`).subscribe(
          (res:any) => {
            
            this.artisan = res
            console.log('this artisan : '+ JSON.stringify(this.artisan))
            // Swal.fire({
            //   title: "Good job!",
            //   text: "You clicked the button!",
            //   icon: "success"
            // });
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

  ngOnInit(): void {
    console.log('get all artisan : ' + this.getAllArtisan())
    this.getAllArtisan()
  }

}
