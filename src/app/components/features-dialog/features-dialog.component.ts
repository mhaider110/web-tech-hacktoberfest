import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-features-dialog',
  templateUrl: './features-dialog.component.html',
  styleUrls: ['./features-dialog.component.scss']
})
export class FeaturesDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FeaturesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  technology: TechnologyFeature
  ngOnInit(): void {
    this.technology = this.data.technology
  }

}

interface TechnologyFeature {
  name: string
  features: [{title: string, description: string}]
}
