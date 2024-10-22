// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class CsrfInterceptor implements HttpInterceptor {

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const csrfToken = this.getCsrfToken();

//     // Ajoute le token CSRF à toutes les requêtes POST, PUT, DELETE
//     if (csrfToken && (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE')) {
//       const cloned = req.clone({
//         headers: req.headers.set('X-CSRFToken', csrfToken)
//       });
//       return next.handle(cloned);
//     }
//     return next.handle(req);
//   }

//   private getCsrfToken(): string | null {
//     // Récupère le token CSRF à partir du cookie
//     const name = 'csrftoken=';
//     const decodedCookie = decodeURIComponent(document.cookie);
//     const cookies = decodedCookie.split(';');
//     for (let i = 0; i < cookies.length; i++) {
//       let cookie = cookies[i].trim();
//       if (cookie.indexOf(name) === 0) {
//         return cookie.substring(name.length, cookie.length);
//       }
//     }
//     return null;
//   }
// }