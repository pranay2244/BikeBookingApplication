import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGaurdService {

  constructor(private authService:AuthserviceService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     this.authService.getUser().pipe(
      map(data=>(data))).subscribe(val=>console.log(val));
    return this.authService.getUser().pipe(
      map(data=>( data==="user"?true:this.router.parseUrl('/login'))));
  
}
}
