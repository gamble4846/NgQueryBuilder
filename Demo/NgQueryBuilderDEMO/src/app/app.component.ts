import { Component, ViewChild } from '@angular/core';
import { FiltersModel, NgQueryBuilderComponent } from 'ng-query-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NgQueryBuilderDEMO';

  @ViewChild('NgQueryBuilder') NgQueryBuilder: NgQueryBuilderComponent | undefined;

  Filters: Array<FiltersModel> = [
    {
      id: 'name',
      field: "username",
      label: {
        en: 'Name',
        fr: 'Nom'
      },
      optgroup: undefined,
      type: "string",
      input: undefined,
      values: undefined,
      value_separator: ",",
      default_value: "Mistic",
      input_event: undefined,
      size: 30,
      rows: undefined,
      multiple: undefined,
      placeholder: undefined,
      vertical: undefined,
      validation: {
        format: undefined,
        min: undefined,
        max: undefined,
        step: undefined,
        messages: undefined,
        allow_empty_value: true,
        callback: undefined
      },
      operators: undefined,
      default_operator: undefined,
      plugin: undefined,
      plugin_config: undefined,
      data: undefined,
      valueSetter: undefined,
      valueGetter: undefined,
      description: undefined,
      unique: true,
      icon: "bi-person-fill"
    },
    {
      id: 'age',
      field: undefined,
      label: "Age",
      optgroup: undefined,
      type: "integer",
      input: "text",
      values: undefined,
      value_separator: "|",
      default_value: undefined,
      input_event: undefined,
      size: undefined,
      rows: undefined,
      multiple: undefined,
      placeholder: undefined,
      vertical: undefined,
      validation: {
        format: undefined,
        min: undefined,
        max: undefined,
        step: undefined,
        messages: undefined,
        allow_empty_value: undefined,
        callback: undefined
      },
      operators: undefined,
      default_operator: undefined,
      plugin: undefined,
      plugin_config: undefined,
      data: undefined,
      valueSetter: undefined,
      valueGetter: undefined,
      description: (rule: any) => {
        if (rule.operator && ['in', 'not_in'].indexOf(rule.operator.type) !== -1) {
          return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
        }
        return '';
      },
      unique: undefined,
      icon: "bi-calendar3"
    }
  ];

  Clear() {
    if (this.NgQueryBuilder)
      this.NgQueryBuilder.Clear();
  }

  Reset() {
    if (this.NgQueryBuilder)
      this.NgQueryBuilder.Reset();
  }

  AddGroup() {
    console.log(this.GetGroups()[1].addGroup);
    if (this.NgQueryBuilder)
      this.GetGroups()[1].addGroup({
        "condition": "AND",  // or "OR" as per your requirement
        "rules": []
      });
    // this.NgQueryBuilder.AddGroup(this.GetGroups()[1]);
  }

  GetGroups() {
    if (this.NgQueryBuilder) {
      let groups = this.NgQueryBuilder.GetListGroups();
      console.log(groups);
      return groups;
    }
  }

  GetModel() {
    if (this.NgQueryBuilder)
      console.log(this.NgQueryBuilder.GetModel());
  }

  AfterAddGroup(event: any) { console.log(event) }
  AfterAddRule(event: any) { console.log(event) }
  AfterApplyGroupFlags(event: any) { console.log(event) }
  AfterApplyRuleFlags(event: any) { console.log(event) }
  AfterClear(event: any) { console.log(event) }
  AfterCreateRuleFilters(event: any) { console.log(event) }
  AfterCreateRuleInput(event: any) { console.log(event) }
  AfterCreateRuleOperators(event: any) { console.log(event) }
  AfterDeleteGroup(event: any) { console.log(event) }
  AfterDeleteRule(event: any) { console.log(event) }
  AfterInit(event: any) { console.log(event) }
  AfterReset(event: any) { console.log(event) }
  AfterSetRules(event: any) { console.log(event) }
  AfterUpdateGroupCondition(event: any) { console.log(event) }
  AfterUpdateRuleFilter(event: any) { console.log(event) }
  AfterUpdateRuleOperator(event: any) { console.log(event) }
  AfterUpdateRuleValue(event: any) { console.log(event) }
  BeforeAddGroup(event: any) { console.log(event) }
  BeforeAddRule(event: any) { console.log(event) }
  BeforeClear(event: any) { console.log(event) }
  BeforeDeleteGroup(event: any) { console.log(event) }
  BeforeDeleteRule(event: any) { console.log(event) }
  BeforeDestroy(event: any) { console.log(event) }
  BeforeReset(event: any) { console.log(event) }
  RulesChanged(event: any) { console.log(event) }
  ValidationError(event: any) { console.log(event) }
}
