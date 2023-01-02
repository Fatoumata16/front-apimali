import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockageeService } from './stockagee.service';

@Injectable({
  providedIn: 'root'
})
export class TokService implements HttpInterceptor {

  constructor( private tik:StockageeService) { }
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // throw new Error('Method not implemented.');
    console.log(req);
    const token=this.tik.gettoken()
    if(token!==null){
      let clone=req.clone({
        headers:req.headers.set('Authorization', 'Bearer '+token)
      })
      console.log(clone)
      return next.handle(clone)
    }

    return next.handle(req);
  }
}
// on va exporter un token interceptor provider
export const tokInterceptorProvider={
  //il se  branche au mm endroit
  provide:HTTP_INTERCEPTORS,
  useClass:TokService,
  //on le met a disposition
  multi:true
}
