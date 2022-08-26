import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent implements OnInit {

  constructor(private dialog: MatDialogRef<DialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) { }

  ngOnInit(): void {
  }

  CloseDialog():any{
    this.dialog.close(false);
    
    
  }

}
