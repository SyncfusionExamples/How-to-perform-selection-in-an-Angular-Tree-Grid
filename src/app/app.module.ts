import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import {
  PageService,
  SortService,
  FilterService
} from '@syncfusion/ej2-angular-treegrid';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TreeGridModule, ButtonModule],
  providers: [PageService, SortService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
