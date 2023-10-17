import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
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
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbolLPxom1oMA-xUdG_A7IAwAbXlsebSM",
  authDomain: "ksolutions-f9b53.firebaseapp.com",
  projectId:"ksolutions-f9b53",
  storageBucket:"ksolutions-f9b53.appspot.com",
  messagingSenderId: "138573951630",
  appId: "1=138573951630=web=5132096b78b21ff13acfdf",
  measurementId: "G-DLLFSBCFK8",
};
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
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }