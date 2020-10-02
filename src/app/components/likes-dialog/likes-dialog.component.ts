import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-likes-dialog',
  templateUrl: './likes-dialog.component.html',
  styleUrls: ['./likes-dialog.component.scss']
})
export class LikesDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LikesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

   technology: any
    ngOnInit(): void {
      this.technology = this.data.technology
    }

}

