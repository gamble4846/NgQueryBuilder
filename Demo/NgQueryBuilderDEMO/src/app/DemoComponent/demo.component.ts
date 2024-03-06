import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FiltersModel, NgQueryBuilderComponent } from 'ng-query-builder';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  @ViewChild('NgQueryBuilder') NgQueryBuilder: NgQueryBuilderComponent | undefined;

  EventLogs: Array<any> = [];
  LatestLog: any;
  ShowFullLog:boolean = false;
  ModalTitle: string = "";

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

  constructor(public _Router: Router) { }

  HideFullLog(){
    this.ShowFullLog = false;
  }

  Decycle(obj: any, stack: any[] = []): any {
    if (!obj || typeof obj !== 'object')
      return obj;
    if (stack.includes(obj))
      return null;
    let s = stack.concat([obj]);
    return Array.isArray(obj)
      ? obj.map(x => this.Decycle(x, s))
      : Object.fromEntries(
        Object.entries(obj)
          .map(([k, v]) => [k, this.Decycle(v, s)]));
  }

  OpenFullLog(log: any) {
    this.LatestLog = log;
    this.ModalTitle = "Full Log"
    this.ShowFullLog = true;
  }

  Clear() {
    if (this.NgQueryBuilder)
      this.NgQueryBuilder.Clear();
  }

  Reset() {
    if (this.NgQueryBuilder)
      this.NgQueryBuilder.Reset();
  }

  GetModel() {
    if (this.NgQueryBuilder){
      this.LatestLog = this.NgQueryBuilder.GetModel();
      this.ModalTitle = "GetModel";
      this.ShowFullLog = true;
    }
  }

  AfterAddGroup(event: any) { this.EventLogs.push({ "eventName": "AfterAddGroup", "eventLog": event, "eventColor": "#e4fff6" }) }
  AfterAddRule(event: any) { this.EventLogs.push({ "eventName": "AfterAddRule", "eventLog": event, "eventColor": "#e3ffd7" }) }
  AfterApplyGroupFlags(event: any) { this.EventLogs.push({ "eventName": "AfterApplyGroupFlags", "eventLog": event, "eventColor": "#ddc2ff" }) }
  AfterApplyRuleFlags(event: any) { this.EventLogs.push({ "eventName": "AfterApplyRuleFlags", "eventLog": event, "eventColor": "#cdd3ff" }) }
  AfterClear(event: any) { this.EventLogs.push({ "eventName": "AfterClear", "eventLog": event, "eventColor": "#ffdcf1" }) }
  AfterCreateRuleFilters(event: any) { this.EventLogs.push({ "eventName": "AfterCreateRuleFilters", "eventLog": event, "eventColor": "#99dde7" }) }
  AfterCreateRuleInput(event: any) { this.EventLogs.push({ "eventName": "AfterCreateRuleInput", "eventLog": event, "eventColor": "#2ec7c0" }) }
  AfterCreateRuleOperators(event: any) { this.EventLogs.push({ "eventName": "AfterCreateRuleOperators", "eventLog": event, "eventColor": "#b2e5ed" }) }
  AfterDeleteGroup(event: any) { this.EventLogs.push({ "eventName": "AfterDeleteGroup", "eventLog": event, "eventColor": "#87dfe9" }) }
  AfterDeleteRule(event: any) { this.EventLogs.push({ "eventName": "AfterDeleteRule", "eventLog": event, "eventColor": "#00abc5" }) }
  AfterInit(event: any) { this.EventLogs.push({ "eventName": "AfterInit", "eventLog": event, "eventColor": "#cbe4f9" }) }
  AfterReset(event: any) { this.EventLogs.push({ "eventName": "AfterReset", "eventLog": event, "eventColor": "#cdf5f6" }) }
  AfterSetRules(event: any) { this.EventLogs.push({ "eventName": "AfterSetRules", "eventLog": event, "eventColor": "#eff9da" }) }
  AfterUpdateGroupCondition(event: any) { this.EventLogs.push({ "eventName": "AfterUpdateGroupCondition", "eventLog": event, "eventColor": "#f9ebdf" }) }
  AfterUpdateRuleFilter(event: any) { this.EventLogs.push({ "eventName": "AfterUpdateRuleFilter", "eventLog": event, "eventColor": "#f9d8d6" }) }
  AfterUpdateRuleOperator(event: any) { this.EventLogs.push({ "eventName": "AfterUpdateRuleOperator", "eventLog": event, "eventColor": "#d6cdea" }) }
  AfterUpdateRuleValue(event: any) { this.EventLogs.push({ "eventName": "AfterUpdateRuleValue", "eventLog": event, "eventColor": "#eee3e7" }) }
  BeforeAddGroup(event: any) { this.EventLogs.push({ "eventName": "BeforeAddGroup", "eventLog": event, "eventColor": "#ead5dc" }) }
  BeforeAddRule(event: any) { this.EventLogs.push({ "eventName": "BeforeAddRule", "eventLog": event, "eventColor": "#f6abb6" }) }
  BeforeClear(event: any) { this.EventLogs.push({ "eventName": "BeforeClear", "eventLog": event, "eventColor": "#a8e6cf" }) }
  BeforeDeleteGroup(event: any) { this.EventLogs.push({ "eventName": "BeforeDeleteGroup", "eventLog": event, "eventColor": "#dcedc1" }) }
  BeforeDeleteRule(event: any) { this.EventLogs.push({ "eventName": "BeforeDeleteRule", "eventLog": event, "eventColor": "#ffd3b6" }) }
  BeforeDestroy(event: any) { this.EventLogs.push({ "eventName": "BeforeDestroy", "eventLog": event, "eventColor": "#ffaaa5" }) }
  BeforeReset(event: any) { this.EventLogs.push({ "eventName": "BeforeReset", "eventLog": event, "eventColor": "#ff8b94" }) }
  RulesChanged(event: any) { this.EventLogs.push({ "eventName": "RulesChanged", "eventLog": event, "eventColor": "#acddde" }) }
  ValidationError(event: any) { this.EventLogs.push({ "eventName": "ValidationError", "eventLog": event, "eventColor": "#caf1de" }) }
}
