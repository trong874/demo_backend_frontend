import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {VegetableListComponent} from "../../components/vegetables/vegetable-list/vegetable-list.component";
import {VegetableAddComponent} from "../../components/vegetables/vegetable-add/vegetable-add.component";
import {AuthGuard} from "../../guards/auth.guard";
import {VegetableEditComponent} from "../../components/vegetables/vegetable-edit/vegetable-edit.component";
import {MasterComponent} from "../../components/master/master.component";
import {ReactiveFormsModule} from "@angular/forms";
import {FooterComponent} from "../../components/core/footer/footer.component";
import {HeaderComponent} from "../../components/core/header/header.component";
import {NgxPaginationModule} from "ngx-pagination";

const routes: Routes = [
  {
    path: "",
    component: MasterComponent,
    children: [
      {
        path: "",
        component: VegetableListComponent
      },
      {
        path: "vgt-add",
        component: VegetableAddComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "vgt-edit/:id",
        component: VegetableEditComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
]

@NgModule({
  declarations: [
    MasterComponent,
    VegetableListComponent,
    VegetableAddComponent,
    VegetableEditComponent,
    FooterComponent,
    HeaderComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        NgxPaginationModule,
    ]
})
export class VegetableModule {
}
