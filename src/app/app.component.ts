
import { Component, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-i18n-multilang';
  minutes = 0;
  dateTime = new Date();

  constructor(@Inject(LOCALE_ID) public locale: string){
    setInterval(()=>{
      this.minutes+=1;
    }, 5000)

    setInterval(() => {
      this.dateTime = new Date();
    }, 1000)
  }
}
