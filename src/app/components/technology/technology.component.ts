import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FeaturesDialogComponent } from '../features-dialog/features-dialog.component';
import { LikesDialogComponent } from '../likes-dialog/likes-dialog.component';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  @Input()
  technology: any

  dialogRef = null
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  openDialog(dialogType: string) {
    this.dialogRef = this.dialog.open(dialogType == 'features' ? FeaturesDialogComponent : LikesDialogComponent, {
      data: { technology: this.technology}
    });
  }

}
