import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { SliderrComponent } from './sliderr/sliderr.component';
import { MealComponent } from './meal/meal.component';
import { AboutComponent } from './about/about.component';
import { WhyComponent } from './why/why.component';
import { VenComponent } from './ven/ven.component';
import { FootComponent } from './foot/foot.component';
import { HomeComponent } from './home/home.component';

import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { ResetComponent } from './reset/reset.component';
import { VenderComponent } from './vender/vender.component';
import { PlaceComponent } from './place/place.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    SliderrComponent,
    MealComponent,
    AboutComponent,
    WhyComponent,
    VenComponent,
    FootComponent,
    HomeComponent,
    
    SignupComponent,
    ForgetComponent,
    ResetComponent,
    VenderComponent,
    PlaceComponent,
    OrderComponent,
    PaymentComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
