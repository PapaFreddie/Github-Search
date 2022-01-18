import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeLandingPageComponent } from './compononents/home-landing-page/home-landing-page.component';
import { RepoComponent } from './components/repo/repo.component';
import { GithubComponent } from './components/github/github.component';
import { GithubServiceService } from './services/github-service.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeLandingPageComponent,
    GithubComponent,
    RepoComponent
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GithubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
