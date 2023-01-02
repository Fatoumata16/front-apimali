import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { InterceptorProvider } from '../providers/interceptor/interceptor';
//import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { tokInterceptorProvider } from './servicies/tok.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    //schemas: [CUSTOM_ELEMENTS_SCHEMA],
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ,tokInterceptorProvider
    // { provide: HTTP_INTERCEPTORS, useClass: InterceptorProvider, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
