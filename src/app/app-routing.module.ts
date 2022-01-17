import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLandingPageComponent } from './compononents/home-landing-page/home-landing-page.component';
const routes: Routes = [
  {
    path: '',
    component: HomeLandingPageComponent,
  },
  {
    path: 'search/: repository-search',
    component: HomeLandingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
