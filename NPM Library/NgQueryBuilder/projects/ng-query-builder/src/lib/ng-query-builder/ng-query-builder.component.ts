import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgQueryBuilderService } from './ng-query-builder.service';
import { FiltersModel } from './ng-query-builder.model';
declare var $: any;

@Component({
  selector: 'lib-ng-query-builder',
  templateUrl: './ng-query-builder.component.html',
  styleUrl: './ng-query-builder.component.css',
  // encapsulation: ViewEncapsulation.None,
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
  @Output() AfterApplyGroupFlags = new EventEmitter<any>();
  @Output() AfterApplyRuleFlags = new EventEmitter<any>();
  @Output() AfterClear = new EventEmitter<any>();
  @Output() AfterCreateRuleFilters = new EventEmitter<any>();
  @Output() AfterCreateRuleInput = new EventEmitter<any>();
  @Output() AfterCreateRuleOperators = new EventEmitter<any>();
  @Output() AfterDeleteGroup = new EventEmitter<any>();
  @Output() AfterDeleteRule = new EventEmitter<any>();
  @Output() AfterInit = new EventEmitter<any>();
  @Output() AfterReset = new EventEmitter<any>();
  @Output() AfterSetRules = new EventEmitter<any>();
  @Output() AfterUpdateGroupCondition = new EventEmitter<any>();
  @Output() AfterUpdateRuleFilter = new EventEmitter<any>();
  @Output() AfterUpdateRuleOperator = new EventEmitter<any>();
  @Output() AfterUpdateRuleValue = new EventEmitter<any>();
  @Output() BeforeAddGroup = new EventEmitter<any>();
  @Output() BeforeAddRule = new EventEmitter<any>();
  @Output() BeforeClear = new EventEmitter<any>();
  @Output() BeforeDeleteGroup = new EventEmitter<any>();
  @Output() BeforeDeleteRule = new EventEmitter<any>();
  @Output() BeforeDestroy = new EventEmitter<any>();
  @Output() BeforeReset = new EventEmitter<any>();
  @Output() RulesChanged = new EventEmitter<any>();
  @Output() ValidationError = new EventEmitter<any>();

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
        this.AfterAddRule.emit({ event: event, rule: rule });
      }).on("afterApplyGroupFlags.queryBuilder", (event: any, group: any) => {
        this.AfterApplyGroupFlags.emit({ event: event, group: group });
      }).on("afterApplyRuleFlags.queryBuilder", (event: any, rule: any) => {
        this.AfterApplyRuleFlags.emit({ event: event, rule: rule });
      }).on("afterClear.queryBuilder", (event: any) => {
        this.AfterClear.emit(event);
      }).on("afterCreateRuleFilters.queryBuilder", (event: any, rule: any) => {
        this.AfterCreateRuleFilters.emit({ event: event, rule: rule });
      }).on("afterCreateRuleInput.queryBuilder", (event: any, rule: any) => {
        this.AfterCreateRuleInput.emit({ event: event, rule: rule });
      }).on("afterCreateRuleOperators.queryBuilder", (event: any, rule: any, operators: any) => {
        this.AfterCreateRuleOperators.emit({ event: event, rule: rule, operators: operators });
      }).on("afterDeleteGroup.queryBuilder", (event: any) => {
        this.AfterDeleteGroup.emit(event);
      }).on("afterDeleteRule.queryBuilder", (event: any) => {
        this.AfterDeleteRule.emit(event);
      }).on("afterInit.queryBuilder", (event: any) => {
        this.AfterInit.emit(event);
      }).on("afterReset.queryBuilder", (event: any) => {
        this.AfterReset.emit(event);
      }).on("afterSetRules.queryBuilder", (event: any) => {
        this.AfterReset.emit(event);
      }).on("afterUpdateGroupCondition.queryBuilder", (event: any, group: any, previousCondition: any) => {
        this.AfterUpdateGroupCondition.emit({ event: event, group: group, previousCondition: previousCondition });
      }).on("afterUpdateRuleFilter.queryBuilder", (event: any, rule: any, previousFilter: any) => {
        this.AfterUpdateRuleFilter.emit({ event: event, rule: rule, previousFilter: previousFilter });
      }).on("afterUpdateRuleOperator.queryBuilder", (event: any, rule: any, previousOperator: any) => {
        this.AfterUpdateRuleOperator.emit({ event: event, rule: rule, previousOperator: previousOperator });
      }).on("afterUpdateRuleValue.queryBuilder", (event: any, rule: any, previousValue: any) => {
        this.AfterUpdateRuleValue.emit({ event: event, rule: rule, previousValue: previousValue });
      }).on("beforeAddGroup.queryBuilder", (event: any, parent: any, addRule: any, level: any) => {
        this.BeforeAddGroup.emit({ event: event, parent: parent, addRule: addRule, level: level });
      }).on("beforeAddRule.queryBuilder", (event: any, parent: any) => {
        this.BeforeAddRule.emit({ event: event, parent: parent });
      }).on("beforeClear.queryBuilder", (event: any) => {
        this.BeforeClear.emit(event);
      }).on("beforeDeleteGroup.queryBuilder", (event: any, parent: any) => {
        this.BeforeDeleteGroup.emit({ event: event, parent: parent });
      }).on("beforeDeleteRule.queryBuilder", (event: any, rule: any) => {
        this.BeforeDeleteRule.emit({ event: event, rule: rule });
      }).on("beforeDestroy.queryBuilder", (event: any) => {
        this.BeforeDestroy.emit(event);
      }).on("beforeReset.queryBuilder", (event: any) => {
        this.BeforeReset.emit(event);
      }).on("rulesChanged.queryBuilder", (event: any) => {
        this.RulesChanged.emit(event);
      }).on("validationError.queryBuilder", (event: any, node: any, error: any, value: any) => {
        this.ValidationError.emit({ event: event, node: node, error: error, value: value });
      })
      this.isLoading = false;
    });
  }

  ngOnInit(): void {

  }

  Clear() {
    if (this.QueryBuilderObject) {
      this.QueryBuilderObject.queryBuilder('clear');
    }
  }

  Reset() {
    if (this.QueryBuilderObject) {
      this.QueryBuilderObject.queryBuilder('reset');
    }
  }

  GetModel(target: any = undefined) {
    if (target) {
      return this.QueryBuilderObject.queryBuilder('getModel', { target: target });
    }
    else {
      return this.QueryBuilderObject.queryBuilder('getModel');
    }
  }
}
