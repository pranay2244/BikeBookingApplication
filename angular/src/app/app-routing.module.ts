import { Component, NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AddBikeComponent } from './admin-side/add-bike/add-bike.component';
import { AdminBookingsComponent } from './admin-side/admin-bookings/admin-bookings.component';
import { AdminDashboardComponent } from './admin-side/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-side/admin-profile/admin-profile.component';
import { AdminSideComponent } from './admin-side/admin-side.component';
import { EditBikeComponent } from './admin-side/edit-bike/edit-bike.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AdminAuthGaurdService } from './services/admin-auth-gaurd.service';
import { AuthgaurdService } from './services/authgaurd.service';
import { SuperAdminAuthGaurdService } from './services/super-admin-auth-gaurd.service';
import { UserAuthGaurdService } from './services/user-auth-gaurd.service';
import { BookingsComponent } from './super-admin-side/bookings/bookings.component';
import { SuperAdminDashboardComponent } from './super-admin-side/super-admin-dashboard/super-admin-dashboard.component';
import { SuperAdminSideComponent } from './super-admin-side/super-admin-side.component';
import { BikeDetailsComponent } from './user-side/bike-details/bike-details.component';
import { CompanyDetailsComponent } from './user-side/company-details/company-details.component';
import { UserDashboardComponent } from './user-side/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-side/user-profile/user-profile.component';
import { UserSideComponent } from './user-side/user-side.component';
import { UserbookingsComponent } from './user-side/userbookings/userbookings.component';
import { EditprofileComponent} from './user-side/editprofile/editprofile.component';
import {SuperadminloginComponent} from './super-admin-side/superadminlogin/superadminlogin.component'
import {AdmineditprofileComponent}from './admin-side/admineditprofile/admineditprofile.component'
const routes: Route[] = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'user',
    component:UserSideComponent,
    children:[
      {
        path:'signup',
        component:SignupComponent,
        
      },{
        path:'editProfile',
        component:EditprofileComponent,
       canActivate:[AuthgaurdService,UserAuthGaurdService]
      },
      {
        path:'dashboard',
        component:UserDashboardComponent,
        canActivate:[AuthgaurdService,UserAuthGaurdService]
      },{
        path:'companyDetail',
        component:CompanyDetailsComponent,
        canActivate:[AuthgaurdService,UserAuthGaurdService],
        children:[
          {
            path:'**',
            component:CompanyDetailsComponent,
            canActivate:[AuthgaurdService,UserAuthGaurdService],
          }
        ]
      },{
        path:'bikeDetail',
        component:BikeDetailsComponent,
        canActivate:[AuthgaurdService,UserAuthGaurdService],
        children:[
          {
            path:'**',
            component:BikeDetailsComponent,
            canActivate:[AuthgaurdService,UserAuthGaurdService],
          }
        ]
      },{
        path:'editProfile',
        component:SignupComponent,
        canActivate:[AuthgaurdService,UserAuthGaurdService]
      },{
        path:'bookings',
        component:UserbookingsComponent,
        canActivate:[AuthgaurdService,UserAuthGaurdService]
      },{
        path:'profile',
        component:UserProfileComponent,
        canActivate:[AuthgaurdService,UserAuthGaurdService],
        children:[{
            path:'**',
            component:UserProfileComponent,
            canActivate:[AuthgaurdService,UserAuthGaurdService],

          }
        ]
      },
  
      {
        path:'**',
        component:ErrorPageComponent
    
      }
    ]

  },
  {
    path:'admin',
    component:AdminSideComponent,
    children:[
      {
        path:'signup',
        component:SignupComponent,
        
      },{
        path:'editProfile',
        component:AdmineditprofileComponent,
      },
      {
        path:'profile',
        component:AdminProfileComponent,
        canActivate:[AuthgaurdService,AdminAuthGaurdService],
        children:[{
          path:'**',
          component:AdminProfileComponent,
          canActivate:[AuthgaurdService,AdminAuthGaurdService],

        }
      ]
      
      },{
        path:'dashboard',
        component:AdminDashboardComponent,
        canActivate:[AuthgaurdService,AdminAuthGaurdService]
      },{
        path:'addBike',
        component:AddBikeComponent,
        canActivate:[AuthgaurdService,AdminAuthGaurdService]
      },{
        path:'editBike',
        component:EditBikeComponent,
        canActivate:[AuthgaurdService,AdminAuthGaurdService],
        children:[{
          path:'**',
          component:EditBikeComponent,
          canActivate:[AuthgaurdService,AdminAuthGaurdService],
          }
        ]
      },{
        path:'bookings',
        component:AdminBookingsComponent,
        canActivate:[AuthgaurdService,AdminAuthGaurdService]
      },{
        path:'editProfile',
        component:SignupComponent,
        canActivate:[AuthgaurdService,AdminAuthGaurdService]
      },
  
      {
        path:'**',
        component:ErrorPageComponent
    
      }
    ]

  },
  {
    path:'superadmin',
    component:SuperAdminSideComponent,
    children:[
      {
        path:'adminList',
        component:SuperAdminDashboardComponent,
        canActivate:[AuthgaurdService,SuperAdminAuthGaurdService]
      },{
        path:'login',
        component:SuperadminloginComponent
      },{
        path:'adminBookings',
        component:BookingsComponent,
        canActivate:[AuthgaurdService,SuperAdminAuthGaurdService]
      },
  
      {
        path:'**',
        component:ErrorPageComponent
    
      }
    ]

  },
  
  {
    path:'**',
    component:ErrorPageComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    AuthgaurdService
  ]
})
export class AppRoutingModule { }
