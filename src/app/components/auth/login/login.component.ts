import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin !: FormGroup
  message !: string
  returnUrl!: string;
  constructor(private authSerVice: AuthService,
              private fb: FormBuilder,
              private router : Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      "email":['',[Validators.required]],
      "password":['',[Validators.required]]
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.isLogin();
  }
  isLogin(){
    if (this.authSerVice.isLogin()){
      this.router.navigate(["/"]);
    }
  }
  submit():void {
    let data = this.formLogin.value
    this.authSerVice.login(data).subscribe(res=>{
        localStorage.setItem('token',res.access_token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigateByUrl(this.returnUrl)
    },error => {
      this.message = error.message
    })
  }

}
