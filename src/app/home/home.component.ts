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

  // onSubmit() {
  //   //console.log(this.rteObj)
  //   let body: string = ""//this.rteObj.getHtml();
  //
  //   console.log(body)
  //   Email.send({
  //     Host: 'smtp.elasticemail.com',
  //     Username: '3dmapprints@gmail.com',
  //     Password: '5085207CCDE40E2E1B1E3A3D9DF8245293F8',
  //     To: '3dmapprints@gmail.com',
  //     From: '3dmapprints@gmail.com',
  //     Subject: 'Someone Contacted You!',
  //     Body:
  //       'Email : ' + this.emailText + '\n' +
  //       'Name : ' + this.nameText + '\n' +
  //       'Message : ' + this.messagesText
  //   }).then(
  //     this._router.navigateByUrl('/thank-you')
  //   );
  // }
}
