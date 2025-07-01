import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { BookingComponent } from './booking/booking.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: UserDashboardComponent },
  { path: 'book/:id', component: BookingComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
