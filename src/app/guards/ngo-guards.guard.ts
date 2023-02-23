import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './../auth-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NgoGuardsGuard implements CanActivate {
  public role_id:any
  public data:any
  constructor(private auth: AuthServiceService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     this.data=this.auth.getUse()
     if(this.data.level_id!=2){
      this.router.navigate(['ngo/cannot-access']);
     }
     return true
  }
  
}
