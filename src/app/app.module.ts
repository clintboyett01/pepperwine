import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { StlModelViewerModule } from 'angular-stl-model-viewer'
// import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps'

// import { MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { FormsModule } from '@angular/forms';
// import { NgxPayPalModule } from 'ngx-paypal';
// import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
// import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { HomeComponent } from './home/home.component';
// import { BuyComponent } from './buy/buy.component';
// import { CustomComponent } from './amenities/amenities.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RatesComponent } from './rates/rates.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';
import { NgOptimizedImage } from '@angular/common'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // BuyComponent,
    // CustomComponent,
    AmenitiesComponent,
    GalleryComponent,
    RatesComponent,
    MapComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    // DropDownListModule,
    FormsModule,
    GoogleMapsModule,
    // NgxPayPalModule,
    // ButtonModule,
    // RichTextEditorModule,
    // StlModelViewerModule,
    // MaskedTextBoxModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
