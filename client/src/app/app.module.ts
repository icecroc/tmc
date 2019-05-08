import '../polyfills'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppComponent} from './app.component'
import {LoginPageComponent} from './login-page/login-page.component'
import {AppRoutingModule} from './app-routing.module'
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component'
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component'
import {RegisterPageComponent} from './register-page/register-page.component'
import {TokenInterceptor} from './shared/classes/token.interceptor'
import {OverviewPageComponent} from './overview-page/overview-page.component'
import {AnalyticsPageComponent} from './analytics-page/analytics-page.component'
import {HistoryPageComponent} from './history-page/history-page.component'
import {OrderPageComponent} from './order-page/order-page.component'
import {CategoriesPageComponent} from './categories-page/categories-page.component'
import {LoaderComponent} from './shared/components/loader/loader.component'
import {CategoriesFormComponent} from './categories-page/categories-form/categories-form.component'
import {PositionsFormComponent} from './categories-page/categories-form/positions-form/positions-form.component'
import {OrderCategoriesComponent} from './order-page/order-categories/order-categories.component'
import {OrderPositionsComponent} from './order-page/order-positions/order-positions.component'
import {HistoryListComponent} from './history-page/history-list/history-list.component'
import {HistoryFilterComponent} from './history-page/history-filter/history-filter.component';
import { AnswerPageComponent } from './answer-page/answer-page.component';
import { AnswerListComponent } from './answer-page/answer-list/answer-list.component';
import { AnswerFormComponent } from './answer-page/answer-form/answer-form.component';
import { ClosedPageComponent } from './closed-page/closed-page.component';
import { ClosedListComponent } from './closed-page/closed-list/closed-list.component';
import { ClosedFormComponent } from './closed-page/closed-form/closed-form.component';
import { OrderSecondCategoriesComponent } from './order-page/order-second-categories/order-second-categories.component';
import { NomsPageComponent } from './noms-page/noms-page.component';
import { ContrsPageComponent } from './contrs-page/contrs-page.component';
import { ContrsFormComponent } from './contrs-page/contrs-form/contrs-form.component';
import { NomsFormComponent } from './noms-page/noms-form/noms-form.component';
import { StartPageComponent } from './start-page/start-page.component';
import { PrihodPageComponent } from './prihod-page/prihod-page.component';
import { PrihodFormComponent } from './prihod-page/prihod-form/prihod-form.component';
import { PrihodListComponent } from './prihod-page/prihod-list/prihod-list.component';
import { MaterialModule } from '../material-module';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegisterPageComponent,
    OverviewPageComponent,
    AnalyticsPageComponent,
    HistoryPageComponent,
    OrderPageComponent,
    CategoriesPageComponent,
    LoaderComponent,
    CategoriesFormComponent,
    PositionsFormComponent,
    OrderCategoriesComponent,
    OrderPositionsComponent,
    HistoryListComponent,
    HistoryFilterComponent,
    AnswerPageComponent,
    AnswerListComponent,
    AnswerFormComponent,
    ClosedPageComponent,
    ClosedListComponent,
    ClosedFormComponent,
    OrderSecondCategoriesComponent,
    NomsPageComponent,
    ContrsPageComponent,
    ContrsFormComponent,
    NomsFormComponent,
    StartPageComponent,
    PrihodPageComponent,
    PrihodFormComponent,
    PrihodListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule)
