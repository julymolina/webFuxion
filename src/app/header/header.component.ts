import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  get currentUrl() {
    return this.route.snapshot.url.toString();
  }

  get isPrunex(){
    return this.currentUrl === 'prunex';
  }
  ngOnInit(): void {
    console.log('aqui es', this.route.snapshot.url.toString());
  }
}
