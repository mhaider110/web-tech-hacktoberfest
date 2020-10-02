import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app-service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {

  constructor(private appService: AppService) { }

  constributors = []
  ngOnInit(): void {
    this.appService.getContributors().subscribe((res) => {
      console.log(res)
      this.constributors = res;
    })
  }

}
