import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { AdminManageVehiclesComponent } from './admin-manage-vehicles/admin-manage-vehicles.component';
import { AdminManageUsersComponent } from './admin-manage-users/admin-manage-users.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashboardComponent,
    BookingComponent,
    NavbarComponent,
    MyBookingsComponent,
    UserSignupComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminBookingsComponent,
    AdminManageVehiclesComponent,
    AdminManageUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
