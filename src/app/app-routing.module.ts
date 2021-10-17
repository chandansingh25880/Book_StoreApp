import { SignupuserComponent } from './components/signupuser/signupuser.component';
import { LoginuserComponent } from './components/loginuser/loginuser.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminsignupComponent } from './components/adminsignup/adminsignup.component';
import { DisplayadminloginSignupComponent } from './components/displayadminlogin-signup/displayadminlogin-signup.component';


const routes: Routes = [
  {
    path: '', 
    component: LoginComponent,

    children: [
      { path: 'login', component: LoginuserComponent },
      { path: 'signup', component: SignupuserComponent }
    ]
  },

    {
      path: '', 
      component: DisplayadminloginSignupComponent,

      children: [
        { path: 'adminlogin', component: LoginuserComponent },
        { path: 'adminsignup', component: SignupuserComponent } 
      ]
  },

  { path: 'home', component: HomepageComponent },
  { path: 'productpage', component: ProductpageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orderplaced', component: OrderplacedComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'adminsignup', component: AdminsignupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


