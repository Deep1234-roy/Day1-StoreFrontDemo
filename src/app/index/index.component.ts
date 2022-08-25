import { Component, OnInit } from '@angular/core';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  matDialogRef: MatDialogRef<DialogComponentComponent> | undefined;

  constructor(private matDialog: MatDialog) { }

  NavigateData = {
    category: '--Select an issue type--',
    description: '',

  }

  FindItData = {
    category: '--Select an issue type--',
    description: '',

  }

  ManageItData = {
    category: '--Select an issue type--',
    description: '',

  }
  selectedIssueType = '';

  Navigatecategories = [
    { label: '--Select an issue type--', value: 'default' },
    { label: 'Enquiry / Help', value: 'inquiry' },
    { label: 'Navigate Issue', value: 'navigateissue' },
    { label: 'Other - Please Explain', value: 'others' },]

  FindItcategories = [
    { label: '--Select an issue type--', value: 'default' },
    { label: 'Enquiry / Help', value: 'inquiry' },
    { label: 'FindIt Issue', value: 'finditissue' },
    { label: 'Other - Please Explain', value: 'others' },]

  ManageItcategories = [
    { label: '--Select an issue type--', value: 'default' },
    { label: 'Enquiry / Help', value: 'inquiry' },
    { label: 'ManageIt Issue', value: 'manageitissue' },
    { label: 'Other - Please Explain', value: 'others' },]

  OpenModal() {
    this.matDialogRef = this.matDialog.open(DialogComponentComponent, {
      disableClose: true,

    });
    this.matDialogRef.afterClosed().subscribe((res) => { });
  }

  onTabChange(): any {
    this.NavigateData.category = "--Select an issue type--";
    this.NavigateData.description = "";
    this.FindItData.category = "--Select an issue type--";
    this.FindItData.description = "";
    this.ManageItData.category = "--Select an issue type--";
    this.ManageItData.description = "";

  }

  ngOnInit(): void {
  }

  openDialogModal(): any {
    console.log("A Modal is opening!!");
    this.OpenModal();


  }
  disableNavigateSubmitForm(): any {
    if (this.NavigateData.category == "--Select an issue type--") {
      return true;
    } else if (this.NavigateData.category == "Other - Please Explain") {
      if (!this.NavigateData.description) {
        return true;
      }
    }
    return false;
  }

  disableFindItSubmitForm(): any {
    if (this.FindItData.category == "--Select an issue type--") {
      return true;
    } else if (this.FindItData.category == "Other - Please Explain") {
      if (!this.FindItData.description) {
        return true;
      }
    }
    return false;
  }

  disableManageItSubmitForm(): any {
    if (this.ManageItData.category == "--Select an issue type--") {
      return true;
    } else if (this.ManageItData.category == "Other - Please Explain") {
      if (!this.ManageItData.description) {
        return true;
      }
    }
    return false;
  }




  supportTicketName = "Create a Support Ticket";

}
