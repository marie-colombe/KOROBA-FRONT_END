import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { FormationComponent } from './components/formation/formation.component';
import { FindArtisanComponent } from './components/find-artisan/find-artisan.component';
import { ShopArtisannComponent } from './components/shop-artisann/shop-artisann.component';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { ArtisanFormComponent } from './components/artisan-form/artisan-form.component';
import { ShopClientComponent } from './components/shop-client/shop-client.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ProfilArtisanComponent } from './components/profil-artisan/profil-artisan.component';
import { ProfilClientComponent } from './components/profil-client/profil-client.component';
import { ConnexionClientComponent } from './components/connexion-client/connexion-client.component';
import { ConnexionArtisanComponent } from './components/connexion-artisan/connexion-artisan.component';
import { ChartArtisanComponent } from './components/chart-artisan/chart-artisan.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [

  {path:'actualite', component:HomeComponent},
  {path:'home', component:PageHomeComponent},
  {path:'formation', component:FormationComponent},
  {path:'trouver_artisan', component:FindArtisanComponent},
  {path:'boutique_artisan', component:ShopArtisannComponent},
  {path:'', component:IndexComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'services', component: ServiceComponent},
  {path:'artisan_form', component: ArtisanFormComponent},
  {path:'boutique_client', component:ShopClientComponent},
  {path:'client_form', component:ClientFormComponent},
  {path:'profile_artisan', component:ProfilArtisanComponent},
  {path:'profile_client', component:ProfilClientComponent},
  {path:'connexion_client', component:ConnexionClientComponent},
  {path:'connexion_artisan', component:ConnexionArtisanComponent},
  {path:'chart_artisan', component:ChartArtisanComponent},
  {path:'add_article', component:AddArticleComponent},
  {path:'dashboard', component:DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
