import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminManageVehiclesComponent } from './admin-manage-vehicles/admin-manage-vehicles.component';





const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: UserDashboardComponent },
  { path: 'book/:id', component: BookingComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'my-bookings', component: MyBookingsComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'signup', component: UserSignupComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-bookings', component: AdminBookingsComponent },
  { path: 'manage-vehicles', component: AdminManageVehiclesComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
