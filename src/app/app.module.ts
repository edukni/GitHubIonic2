import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpModule} from '@angular/http';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { GitHubServiceProvider } from '../providers/git-hub-service/github.service';
// import { RepositoriesComponent } from '../components/repositories/repositories';
// import { SearchResultsComponent } from '../components/search-results/search-results.component';
// import { ProfileSearchPage } from '../pages/profile-search/profile-search';

@NgModule({
  declarations: [
    MyApp,
    // RepositoriesComponent,
    // SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GitHubServiceProvider
  ]
})
export class AppModule {}
