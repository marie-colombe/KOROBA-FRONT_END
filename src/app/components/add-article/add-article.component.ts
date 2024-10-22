import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestClientService } from 'src/app/core/services/restClient/rest-client.service';
import { ProductInterface } from './product-interface';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  products : ProductInterface = {}

  constructor(
    private restClientService : RestClientService,
    private router : Router
  ) { }

  create_product()  {
    let request =  {
    artisan:4 ,
    name_product: this.products.name_product ,
    description_product: this.products.description_product,
    price: this.products.price,
    image: null
    }

    const promise = new Promise((resolve,rejects) => {
      this.restClientService.execute('/product/', request).subscribe(
        (res:any) => {
          console.log('this product :'+this.products)
          this.products = res
          Swal.fire({
            title: "Good job!",
            text: "Produit a bien été créé  !",
            icon: "success"
          });
          this.router.navigate(['/boutique_artisan'])
        }, 
        (error:any) => {
          Swal.fire({
            title: 'Erreur!',
            text: `Probleme pour la creation du produit !`,
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
