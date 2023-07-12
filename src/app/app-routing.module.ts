import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPostListComponent } from './user-post-list/user-post-list.component';
import { CreateUserPostComponent } from './create-user-post/create-user-post.component';
import { YearlyAnalyticsComponent } from './yearly-analytics/yearly-analytics.component';
import { MonthlyAnalyticsComponent } from './monthly-analytics/monthly-analytics.component';
import { SemiAnnuallyAnalyticsComponent } from './semi-annually-analytics/semi-annually-analytics.component';
import { QuaterlyAnalyticsComponent } from './quaterly-analytics/quaterly-analytics.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  {
    path:'',component:NavbarComponent,
  },
  {
    path:'UserPost',component:PostComponent,
  },
  {
    path:'List/:username',component:UserPostListComponent,
  },
  {
    path:'analytics',component:AnalyticsComponent,
  },
    {
      path:'Post',component:CreateUserPostComponent,
    },
    {
      path:'yearlyAnalytics/:year/:username',component:YearlyAnalyticsComponent,
    },
    {
      path:'monthlyAnalytics/:year/:username',component:MonthlyAnalyticsComponent,
    },
    {
      path:'semiAnnuallyAnalytics/:year/:username',component:SemiAnnuallyAnalyticsComponent,
    },
    {
      path:'quaterlyAnalytics/:year/:username',component:QuaterlyAnalyticsComponent,
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
