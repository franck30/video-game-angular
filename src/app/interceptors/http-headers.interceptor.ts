import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': '6d966319e7mshf295fb77f955b1ap1dabadjsn755335cacc7b'
      },
      setParams: {
        key: '66b7fbfb60a647fdb752e2bb683546c0'
      }
    });

    return next.handle(req);

  }

}
