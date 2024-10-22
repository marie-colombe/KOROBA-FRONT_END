import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { CsrfInterceptor } from './core/services/interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { FormationComponent } from './components/formation/formation.component';
import { FindArtisanComponent } from './components/find-artisan/find-artisan.component';
import { ShopArtisannComponent } from './components/shop-artisann/shop-artisann.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { IndexComponent } from './components/index/index.component';
import { HeaderIndexComponent } from './components/layout/header-index/header-index.component';
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
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FindForArtisanComponent } from './find-for-artisan/find-for-artisan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    PageHomeComponent,
    FormationComponent,
    FindArtisanComponent,
    ShopArtisannComponent,
    HeaderComponent,
    IndexComponent,
    HeaderIndexComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    ArtisanFormComponent,
    ShopClientComponent,
    ClientFormComponent,
    ProfilArtisanComponent,
    ProfilClientComponent,
    ConnexionClientComponent,
    ConnexionArtisanComponent,
    ChartArtisanComponent,
    AddArticleComponent,
    DashboardComponent,
    FindForArtisanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: CsrfInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
