import { Component } from '@angular/core';
import {GoogleMapsModule} from "@angular/google-maps";
import {GoogleMap} from "@angular/google-maps";
import { OnInit, Renderer2 } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
   myLatLng = { lat: 31.911367416381836, lng: -95.22950744628906 };

  constructor(private title: Title, private meta: Meta) {}
  ngOnInit() {
    this.title.setTitle("Pepperwine RV Park | Jacksonville, TX");
    this.meta.updateTag({name: 'description', content: "Experience the best at Pepperwine RV Park near Jacksonville, TX. Nature trails, fishing lake, and exceptional RV comforts await."});
    this.meta.addTags([
      {name: 'keywords', content: "RV Parks in Jacksonville Texas, RV Parks Jacksonville tx, RV Parks Jacksonville, Pepperwine RV Park amenities" },
      {name: 'robots', content: 'index, follow'},
      {name: 'author', content: 'Clint Boyett'},
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:title', content: "RV Park Amenities | Pepperwine RV Park, Jacksonville, TX" },
      { name: 'og:description', content: "Experience the best at Pepperwine RV Park near Jacksonville, TX. Nature trails, fishing lake, and exceptional RV comforts await." },
      { name: 'og:image', content: "https://pepperwinervpark.org/assets/Arial2.jpg" },
      { name: 'og:url', content: "https://pepperwinervpark.org/amenities" },
      { name: 'og:type', content: "website" },
      { name: 'og:site_name', content: "Pepperwine RV Park" }]);
  }

  // ngOnInit(){
  //   this.change()
  // }
  //
  // ngAfterContentInit(){
  //   this.change()
  // }
  // ngDoCheck(){
  //   this.change()
  // }
  ngOnChanges(){

  }
  num = 0
  //make an array of strings called help
  // change() {
  //   const parent: HTMLElement = document.getElementById('mapDiv')!;
  //   const iframe: HTMLElement = document.getElementById('iframe')!;
  //   const test: HTMLElement = document.getElementById('test')!;
  //   switch (this.num){
  //     case 0:
  //       this.renderer.setStyle(test,"background-color","red")
  //       break;  case 0:
  //       this.renderer.setStyle(test,"background-color","green")
  //       break;
  //       this.renderer.setStyle(test,"background-color","yellow")
  //   }
  //
  //
  //
  //
  //   const child = parent.children[0];
  //   const height = iframe.offsetHeight;
  //   console.log(height)
  //   if(height == 850){
  //     console.log("Set small")
  //     this.renderer.setStyle(parent, 'padding-bottom',"637.5");
  //   }
  //   else {
  //     this.renderer.setStyle(parent, 'padding-bottom',"75%");
  //   }
  // }

  public hideMobileMenu  = false
  toggleMobileMenu(){
    this.hideMobileMenu= !this.hideMobileMenu;
  }

}
