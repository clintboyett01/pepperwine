import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Meta, Title} from "@angular/platform-browser";
declare var Email: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


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

  emailText: string = '';
  nameText: string = '';
  messagesText: string = '';

  public hideMobileMenu  = false
  toggleMobileMenu(){
    this.hideMobileMenu= !this.hideMobileMenu;
  }
  constructor(private _router: Router,private title: Title, private meta: Meta) { }

}
