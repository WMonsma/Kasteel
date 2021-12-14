import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { BierverrekenenComponent } from './modules/bierverrekenen/bierverrekenen.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'homepage', component: HomepageComponent},
  { path: 'bierverrekenen', component: BierverrekenenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BierverrekenenComponent]
