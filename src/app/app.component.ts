import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'gux-components';
  public rowsList = [
    {
      key:'test',
      text:'test'
    },
    {
      key:'test2',
      text:'test2'
    },
    {
      key:'test3',
      text:'test3'
    },
    {
      key:'test3',
      text:'test3'
    },
    {
      key:'test',
      text:'test'
    },
    {
      key:'test2',
      text:'test2'
    },
    {
      key:'test3',
      text:'test3'
    },
    {
      key:'test3',
      text:'test3'
    }
  ]
}
