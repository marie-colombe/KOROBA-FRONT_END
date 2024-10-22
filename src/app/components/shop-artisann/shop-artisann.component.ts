import { Component, OnInit } from '@angular/core';
import { ProductInterface } from './product-interface';
import { RestClientService } from 'src/app/core/services/restClient/rest-client.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-shop-artisann',
  templateUrl: './shop-artisann.component.html',
  styleUrls: ['./shop-artisann.component.css']
})
export class ShopArtisannComponent implements OnInit {

  products : any
  constructor(
    private restClientService: RestClientService,
    private router : Router
  ) { }

  getAllProduct() {
    const promise = new Promise((resolve,rejects) => {
      this.restClientService.executeGet('product/').subscribe(
        (res:any) => {
          this.products = res
          Swal.fire({
            title: "Good job!",
            text: "Produit a bien été affiché  !",
            icon: "success"
          });
          // this.router.navigate(['/boutique_artisan'])
        },
        (error:any) => {
          Swal.fire({
            title: "Erreur",
            text: "Probleme de connexion sur le Produit  !",
            icon: "error"
          });
          this.router.navigate(['/boutique_artisan'])
        }
      )
    })
  }



  ngOnInit(): void {
    this.getAllProduct()
  }

}
