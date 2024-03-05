import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgQueryBuilderService } from './ng-query-builder.service';
import { FiltersModel } from './ng-query-builder.model';
declare var $: any;

@Component({
  selector: 'lib-ng-query-builder',
  templateUrl: './ng-query-builder.component.html',
  styleUrl: './ng-query-builder.component.css'
})
export class NgQueryBuilderComponent {
  constructor(
    private _NgQueryBuilderService: NgQueryBuilderService,
    private _ChangeDetectorRef: ChangeDetectorRef
  ) { }

  @ViewChild('NgQueryBuilderDIV') NgQueryBuilderDIV: any;

  @Input() AddGroupIconClass: string = "bi-plus-circle-fill";
  @Input() AddRuleIconClass: string = "bi-plus-lg";
  @Input() RemoveGroupIconClass: string = "bi-x-lg";
  @Input() RemoveRuleIconClass: string = "bi-x-lg";
  @Input() ErrorIconClass: string = "";
  @Input() Filters: Array<FiltersModel> = [];

  @Output() AfterAddGroup = new EventEmitter<any>();
  @Output() AfterAddRule = new EventEmitter<any>();

  QueryBuilderObject: any;
  isLoading: boolean = false;


  ngAfterViewInit(): void {
    this.SetupQueryBuilder();
    this._ChangeDetectorRef.detectChanges();
  }

  SetupQueryBuilder() {
    this.isLoading = true;
    this._NgQueryBuilderService.setupExternalFiles().subscribe((response: boolean) => {
      console.log(response, this.NgQueryBuilderDIV, "test");
      this.QueryBuilderObject = $(this.NgQueryBuilderDIV.nativeElement);
      this.QueryBuilderObject.queryBuilder({
        icons: {
          add_group: this.AddGroupIconClass,
          add_rule: this.AddRuleIconClass,
          remove_group: this.RemoveGroupIconClass,
          remove_rule: this.RemoveRuleIconClass,
          error: this.ErrorIconClass
        },
        filters: this.Filters,
      }).on("afterAddGroup.queryBuilder", (event: any, group: any) => {
        this.AfterAddGroup.emit({ event: event, group: group });
      }).on("afterAddRule.queryBuilder", (event: any, rule: any) => {
        this.AfterAddRule.emit({ event: event, group: rule });
      })
      this.isLoading = false;

      console.log(this.QueryBuilderObject);
    });
  }

  ngOnInit(): void {

  }
}
