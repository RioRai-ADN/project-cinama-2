import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {

  arrBanner = [
    { status: 'active', url: "https://lottecinemavn.com/getattachment/0eb2ab5f-01f8-43dc-8deb-e9cecffb6060/NodeAlias.aspx?width=1170&height=430" },
    { status: '', url: "https://lottecinemavn.com/getattachment/0ccf981a-9c75-46cb-8843-e19e5da5167d/NodeAlias.aspx?width=1170&height=430" },
    { status: '', url: "https://lottecinemavn.com/getattachment/3e412788-da71-4906-97ae-0325be93ce5a/NodeAlias.aspx?width=1170&height=430" }

];

  constructor() { 
  }

  ngOnInit() {
  }

}
