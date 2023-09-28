import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {SevicesComponent} from '../app/sevices/sevices.component';
import {CapabilitiesComponent} from '../app/capabilities/capabilities.component';
import {PageNotFoundComponent} from '../app/page-not-found/page-not-found.component'
const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'services', component : SevicesComponent},
  {path : 'capabilities', component : CapabilitiesComponent},
  {path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
