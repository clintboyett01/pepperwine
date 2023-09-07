import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapComponent} from './map/map.component';
// import { BuyComponent } from './buy/buy.component';
// import { CustomComponent } from './amenities/amenities.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { HomeComponent } from './home/home.component';
import {GalleryComponent} from "./gallery/gallery.component";
import {RatesComponent} from "./rates/rates.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  // { path: 'buy', component: BuyComponent },
  { path: 'home', component: HomeComponent },
  { path: 'amenities', component: AmenitiesComponent },
  { path: 'rates', component: RatesComponent },
  { path: 'map', component: MapComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'gallery', component: GalleryComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'sitemap.xml', redirectTo: '/sitemap.xml', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
