import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLandingPageComponent } from './compononents/home-landing-page/home-landing-page.component';
import { RepoComponent } from './components/repo/repo.component';




const routes: Routes = [
  {
    path: '',
    component: HomeLandingPageComponent,
  },
  {
    path: 'search/: repository-search',
    component: HomeLandingPageComponent,
  },
  {
    path: 'repositories', 
    component: RepoComponent

  },
  {path: '', redirectTo:"./components/github/github.component", pathMatch: "full"
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
