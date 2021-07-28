import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin : boolean = false

  constructor(private authService: AuthService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin(){
    // @ts-ignore
    this.isLogin = this.authService.isLogin();
    if (!this.isLogin){
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }
  logout() {
    this.authService.logout().subscribe(res => {
      console.log(res)
    });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.route.navigate([''])
    this.checkLogin();
  }
}
