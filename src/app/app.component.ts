import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular11File-manager';
  public hostUrl: string = 'https://physical-service.syncfusion.com/';
  public ajaxSettings: object = {
url: this.hostUrl + 'api/FileManager/FileOperations'
  };
}
