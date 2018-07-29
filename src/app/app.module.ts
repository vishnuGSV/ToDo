import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterdataPipe } from './filterdata.pipe';
import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FilterdataPipe
  ],
  imports: [
    BrowserModule, Ng2SearchPipeModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
