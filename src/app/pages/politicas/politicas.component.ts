import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.scss'],
})
export class PoliticasComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    try {
      document.querySelector('#politicaDePrivacidad').scrollIntoView();
    } catch (e) {}
  }
}
