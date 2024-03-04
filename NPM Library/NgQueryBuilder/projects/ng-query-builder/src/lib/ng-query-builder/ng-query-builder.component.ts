import { Component } from '@angular/core';
import { NgQueryBuilderService } from './ng-query-builder.service';

@Component({
  selector: 'lib-ng-query-builder',
  templateUrl: './ng-query-builder.component.html',
  styleUrl: './ng-query-builder.component.css'
})
export class NgQueryBuilderComponent {
  constructor(private _NgQueryBuilderService:NgQueryBuilderService){}

  ngOnInit(): void {
    this._NgQueryBuilderService.setupExternalFiles().subscribe((response: boolean) => {
      console.log(response);
    });
  }
}
