import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";

const API_URL = environment.url + "auth/";
const helper =  new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(user: any) {
    return this.http.post<any>(API_URL + "register", user)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getToken() {
    return localStorage.getItem('token')
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(API_URL + "login", data)
  }
  isTokenExpired(token?: string|null): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;

    const date = helper.getTokenExpirationDate(token);
    console.log(date);
    if(date === undefined) return false;
    // @ts-ignore
    return !(date.valueOf() > new Date().valueOf());
  }
  isLogin() {
    let token = this.getToken();
    if(this.isTokenExpired(token)){
      return false
    }else {
      return true
    }
  }



  logout() {
    let token = this.getToken()
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {
      headers: headers_object
    }
    return this.http.post<any>(API_URL + 'logout', null, httpOptions)
  }
}
