import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {environment} from "../../environments/environment";

const URL_API = environment.url + "vgts/";

@Injectable({
  providedIn: 'root'
})
export class VegetableService {

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  getAllVgt(): Observable<any> {
    return this.http.get<any>(URL_API);
  }

  httpOptions() {
    let token = this.authService.getToken();
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    return {
      headers: headers_object
    };
  }

  addVgt(vgt: any) {
    return this.http.post<any>(URL_API, vgt, this.httpOptions());
  }

  deleteVgt(id: number) {
    return this.http.delete<any>(URL_API + id, this.httpOptions());
  }

  findById($id: number) {
    return this.http.get<any>(URL_API + $id);
  }

  update(data: any, id: number) {
    return this.http.put<any>(URL_API + id, data, this.httpOptions());
  }
}
