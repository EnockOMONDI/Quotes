import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MotivationalQuotesComponent } from './motivational-quotes/motivational-quotes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MotivationalQuotesComponent,
    QuoteDetailsComponent
  ],
  imports: [
    BrowserModule
    FormsModule,
  ]
  providers: []
  bootstrap: [AppComponent]
})
export class AppModule { }
