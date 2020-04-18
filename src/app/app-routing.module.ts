import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { VenComponent } from './ven/ven.component';
import { MealComponent } from './meal/meal.component';
import { WhyComponent } from './why/why.component';
import { FootComponent } from './foot/foot.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { ResetComponent } from './reset/reset.component';
import { VenderComponent } from './vender/vender.component';
import { PlaceComponent } from './place/place.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [

  {path:'about', component:AboutComponent},
  {path:'Home', component:HomeComponent},
  {path:'' , redirectTo:'/Home', pathMatch:'full'},
  {path:'Vender',component:VenComponent},
  {path:'The Menu',component:MealComponent},
  {path:'Why Swad',component:WhyComponent},
  {path:'CONTACT US',component:FootComponent},
  
  {path:'Sign Up',component:SignupComponent},
  {path:'Forget Password',component:ForgetComponent},
  {path:'Reset Password',component:ResetComponent},
  {path:'Join As Vendor',component:VenderComponent},
  {path:'Online Order',component:PlaceComponent},
  {path:'PLACE ORDER',component:PlaceComponent},
  {path:'Next',component:OrderComponent},
  {path:'Order Now',component:PaymentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
