import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGaurdService implements CanActivate {

  constructor(private authService:AuthserviceService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     this.authService.getUser().pipe(
      map(data=>(data))).subscribe(val=>console.log(val));
    return this.authService.getUser().pipe(
      map(data=>( data==="admin"?true:this.router.parseUrl('/login'))));


  }
 
}
