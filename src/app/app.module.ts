import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ENV
import { environment } from 'src/environments/environment';

//Modules
import {SharedModule} from './shared/shader.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { AppRouterModule } from './app.router-module';

//NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {AppEffects,AppReducer} from './Store/index'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    PagesModule,
    AuthModule,
    AppRouterModule,
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({ name:'App Chuck Norris',maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(AppEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
