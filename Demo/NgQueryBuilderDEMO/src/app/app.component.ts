import { Component } from '@angular/core';
import { FiltersModel } from 'ng-query-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NgQueryBuilderDEMO';
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
      operators: [],
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
      operators: [],
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
}
