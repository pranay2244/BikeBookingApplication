import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthserviceService } from './authservice.service';
@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanActivate {

  constructor(private authservice:AuthserviceService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     console.log(this.authservice.get().pipe(
      map(data=>(console.log(data)))).subscribe(val=>console.log(val)));
    return this.authservice.get().pipe(
      map(data=> data=="true"?true:this.router.parseUrl('/login')));
  }
}
