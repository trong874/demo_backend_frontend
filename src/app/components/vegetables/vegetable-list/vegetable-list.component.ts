import {Component, OnInit} from '@angular/core';
import {VegetableService} from "../../../services/vegetable.service";

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.css',]
})
export class VegetableListComponent implements OnInit {
  vgtData !: any;
  totalLength !: number;
  page : number = 1;

  constructor(private vegetableService: VegetableService) {
  }

  ngOnInit(): void {
    this.getAllVgt()
    this.totalLength = this.vgtData.length
  }

  getAllVgt() {
    this.vegetableService.getAllVgt().subscribe(res => {
      this.vgtData = res;
    })
  }

  deleteVgt(id: number) {
    if (confirm("Chắc chắn xóa sản phẩm này")) {
      this.vegetableService.deleteVgt(id).subscribe(res => {
        console.log(res)
        this.getAllVgt()
      })
    }
  }
}
