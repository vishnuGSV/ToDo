import { Component } from '@angular/core';

import { HttpModule} from '@angular/http'; //used for REST call

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'TodoWeb2';
  TodoList = [{description : "need to read",
                  status : "Open"},
                  {description : "Failed to test",
                  status : "Resolved"}]
}
