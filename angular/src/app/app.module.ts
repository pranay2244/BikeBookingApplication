import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminDashboardComponent } from './admin-side/admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './admin-side/admin-navbar/admin-navbar.component';
import { AdminProfileComponent } from './admin-side/admin-profile/admin-profile.component';
import { AdminSideComponent } from './admin-side/admin-side.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyService } from './services/company.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ModelsModule } from './models/models.module';
import { ServicesModule } from './services/services.module';
import { BookingsComponent } from './super-admin-side/bookings/bookings.component';
import { SuperAdminDashboardComponent } from './super-admin-side/super-admin-dashboard/super-admin-dashboard.component';
import { SuperAdminNavbarComponent } from './super-admin-side/super-admin-navbar/super-admin-navbar.component';
import { SuperAdminSideComponent } from './super-admin-side/super-admin-side.component';
import { BikeDetailsComponent } from './user-side/bike-details/bike-details.component';
import { BikeComponent } from './user-side/bike/bike.component';
import { CompanyDetailsComponent } from './user-side/company-details/company-details.component';
import { CompanyComponent } from './user-side/user-dashboard/company/company.component';
import { UserDashboardComponent } from './user-side/user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './user-side/user-navbar/user-navbar.component';
import { UserProfileComponent } from './user-side/user-profile/user-profile.component';
import { UserSideComponent } from './user-side/user-side.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HttpClientModule } from '@angular/common/http'
import { BikeService } from './services/bike.service';
import { LoginService } from './services/login.service';
import { AuthgaurdService } from './services/authgaurd.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {LoginComponent} from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddBikeComponent } from './admin-side/add-bike/add-bike.component';
import { EditBikeComponent } from './admin-side/edit-bike/edit-bike.component';
import { AuthModule } from './auth/auth.module';
import { LogoutService } from './services/logout.service';
import { UserbookingsComponent } from './user-side/userbookings/userbookings.component';
import { AdminAuthGaurdService } from './services/admin-auth-gaurd.service';
import { AdminBookingsComponent } from './admin-side/admin-bookings/admin-bookings.component';

import { SuperadminloginComponent } from './super-admin-side/superadminlogin/superadminlogin.component';
import { EditprofileComponent } from './user-side/editprofile/editprofile.component';
import { AdmineditprofileComponent } from './admin-side/admineditprofile/admineditprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminSideComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    AdminProfileComponent,
    UserSideComponent,
    UserDashboardComponent,
    UserNavbarComponent,
    UserProfileComponent,
    SuperAdminDashboardComponent,
    SuperAdminSideComponent,
    SuperAdminNavbarComponent,
    ErrorPageComponent,
    CompanyDetailsComponent,
    BikeDetailsComponent,
    CompanyComponent,
    BikeComponent,
    BookingsComponent,
    AddBikeComponent,
    EditBikeComponent,
    UserbookingsComponent,
    AdminBookingsComponent,
    SuperadminloginComponent,
    EditprofileComponent,
    AdmineditprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelsModule ,
    ServicesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [
    CompanyService,BikeService,
    LoginService,AuthgaurdService,
    LogoutService,
    AdminAuthGaurdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
