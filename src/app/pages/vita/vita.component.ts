import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vita',
  templateUrl: './vita.component.html',
  styleUrls: ['./vita.component.scss'],
})
export class VitaComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  private fragment: string;

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      this.fragment = fragment;
      const element = document.querySelector('#' + fragment);
      if (element) element.scrollIntoView();
    });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) {}
  }
}
