import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LoginuserComponent } from './components/loginuser/loginuser.component';
import { SignupuserComponent } from './components/signupuser/signupuser.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BooksComponent } from './components/books/books.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminsignupComponent } from './components/adminsignup/adminsignup.component';
import { DisplayadminloginSignupComponent } from './components/displayadminlogin-signup/displayadminlogin-signup.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginuserComponent,
    SignupuserComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    ProductpageComponent,
    ProductComponent,
    CartComponent,
    OrderplacedComponent,
    WishlistComponent,
    ForgetPasswordComponent,
    AdminloginComponent,
    AdminsignupComponent,
    DisplayadminloginSignupComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatRadioModule,
    FlexLayoutModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
