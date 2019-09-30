import {Component} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  convert(e) {
    const inputValue = e['srcElement'].value;
    console.log((inputValue >>> 0).toString(2));

  }

}
