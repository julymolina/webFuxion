import { AfterViewInit, Component } from '@angular/core';

declare var mixpanel: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'epigenetica';

  ngAfterViewInit() {
    mixpanel.track('AbrioApp');
  }
}
