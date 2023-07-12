import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPostListComponent } from './user-post-list/user-post-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateUserPostComponent } from './create-user-post/create-user-post.component';
import { FormsModule } from '@angular/forms';
import { YearlyAnalyticsComponent } from './yearly-analytics/yearly-analytics.component';
import { MonthlyAnalyticsComponent } from './monthly-analytics/monthly-analytics.component';
import { SemiAnnuallyAnalyticsComponent } from './semi-annually-analytics/semi-annually-analytics.component';
import { QuaterlyAnalyticsComponent } from './quaterly-analytics/quaterly-analytics.component';

import { AnalyticsComponent } from './analytics/analytics.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPostListComponent,
    NavbarComponent,
    CreateUserPostComponent,
    YearlyAnalyticsComponent,
    MonthlyAnalyticsComponent,
    SemiAnnuallyAnalyticsComponent,
    QuaterlyAnalyticsComponent,
    
    AnalyticsComponent,
         SidebarComponent,
         PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
