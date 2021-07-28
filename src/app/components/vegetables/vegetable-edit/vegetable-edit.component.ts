import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {VegetableService} from "../../../services/vegetable.service";

@Component({
  selector: 'app-vegetable-edit',
  templateUrl: './vegetable-edit.component.html',
  styleUrls: ['./vegetable-edit.component.css']
})
export class VegetableEditComponent implements OnInit {

  idVegetable !: any;
  formEdit !: FormGroup;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private vegetableService: VegetableService,
              private router: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.idVegetable = +this.route.snapshot.paramMap.get('id');

    this.vegetableService.findById(this.idVegetable).subscribe(res=>{
      this.formEdit.patchValue(res);
    },error => {
      this.router.navigate([''])
    });

    this.formEdit = this.fb.group({
      name: ['', [Validators.required]],
      image: ['', Validators.required],
      price: ['', [Validators.required]],
      des: ['', [Validators.required]]
    })
  }
  submit(){
    let data = this.formEdit.value;
    this.vegetableService.update(data,this.idVegetable).subscribe(res=>{
      console.log(res);
    })
    this.router.navigate(["/"])
  }


}
