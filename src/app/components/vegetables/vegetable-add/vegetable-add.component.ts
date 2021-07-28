import {Component, OnInit} from '@angular/core';
import {VegetableService} from "../../../services/vegetable.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-vegetable-add',
  templateUrl: './vegetable-add.component.html',
  styleUrls: ['./vegetable-add.component.css']
})
export class VegetableAddComponent implements OnInit {
  image !: any;
  formAdd !: FormGroup
  errmessage !: string;

  constructor(private vegetableService: VegetableService,
              private fb: FormBuilder,
              private route: Router) {
  }

  ngOnInit(): void {
    this.formAdd = this.fb.group({
      name: ['', [Validators.required]],
      image: [this.image],
      price: ['', [Validators.required]],
      des: ['', [Validators.required]]
    })
  }

  submit() {
    let form = this.formAdd.value
    const formData = new FormData();
    formData.append('image', this.image);
    formData.append('name',form.name);
    formData.append('price', form.price);
    formData.append('des',  form.des);
    console.log(formData)
    this.vegetableService.addVgt(formData).subscribe(res => {
      this.route.navigate(['/'])
      return res;
    }, error => {
      this.errmessage = JSON.stringify(error.message);
    })
  }

  onFileSelect(event: any) {
    if (event != null && event.target.files.length > 0) {
      this.image = event.target.files[0];
    }
  }

}
