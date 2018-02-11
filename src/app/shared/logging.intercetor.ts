import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../components/auth/auth.service";
// import { Injectable } from '@angular/core'
import "rxjs/add/operator/do";

// @Injectable()
export class LoggingIntercetor implements HttpInterceptor {
  // constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log('Intercepted!', req)
    // const copiedReq = req.clone({
    //   params: req.params.set('auth', this.authService.getToken())
    // })
    return next.handle(req).do(event => {
      console.log("Log Intercetor", event);
    });
  }
}
