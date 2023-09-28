import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SolutionProviderComponent } from './home/solution-provider/solution-provider.component';
import { SevicesComponent } from './sevices/sevices.component';
import { CapabilitiesComponent } from './capabilities/capabilities.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FootprintComponent } from './footprint/footprint.component';
import { ClientComponent } from './client/client.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SolutionProviderComponent,
    SevicesComponent,
    CapabilitiesComponent,
    PageNotFoundComponent,
    FootprintComponent,
    ClientComponent,
    AboutUsComponent,
    ContactUsComponent,
    GetQuoteComponent,
    FooterComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }