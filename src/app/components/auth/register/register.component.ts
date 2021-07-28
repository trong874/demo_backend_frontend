import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister !: FormGroup;
  message !: string;
  constructor(private authService: AuthService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
        name: ['',[Validators.required]],
        email: ['',[Validators.required]],
        password: ['',Validators.required],
        password_confirmation  : ['',[Validators.required]]
      },
      {validator: this.ConfirmedValidator('password', 'password_confirmation')})
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({confirmedValidator: true});
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
  submit(){
    let userData = this.formRegister.value
    this.authService.register(userData).subscribe(res => {
      this.message = res.message
    },error => {
      this.message = error.error
    })
  }
}
