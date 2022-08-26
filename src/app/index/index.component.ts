import { Component, OnInit } from '@angular/core';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import {supportFormDropDown} from "../../assets/constants";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  matDialogRef: MatDialogRef<DialogComponentComponent> | undefined;
  productDetails: any;
  categorizedProducts: any;
  index=0;
  DropDownList:any;
  issueType:any;
  description:any;
  constructor(private matDialog: MatDialog, private productService:ProductsService) { }

  getProductDetails() {
    this.productService.getAllProductsApps().subscribe((res) => {
      this.productDetails = res;
      this.categorizedProducts =
        this.productDetails['results'][0].productDetailsList;
    });
  }


  OpenModal() {
    this.matDialogRef = this.matDialog.open(DialogComponentComponent, {
      disableClose: true,

    });
    this.matDialogRef.afterClosed().subscribe((res) => { });
  }

  onTabChange(): any {
    this.issueType='';
    this.description='';

  }

  ngOnInit(): void {
    this.getProductDetails();
    this.DropDownList=supportFormDropDown;
  }

  openDialogModal(): any {
    console.log("A Modal is opening!!");
    this.OpenModal();
    this.issueType='';


  }
  disableSubmitForm(): any {
    if (!this.issueType) {
      return true;
    }else if(this.issueType == 'others'){
      if(!this.description){
        return true;
      }
    }
    return false;
  }
  supportTicketName = "Create a Support Ticket";

}
