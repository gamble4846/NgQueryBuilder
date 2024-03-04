import { Component, ViewChild } from '@angular/core';
import { NgQueryBuilderService } from './ng-query-builder.service';
declare var jspreadsheet: any;
declare var $: any;

@Component({
  selector: 'lib-ng-query-builder',
  templateUrl: './ng-query-builder.component.html',
  styleUrl: './ng-query-builder.component.css'
})
export class NgQueryBuilderComponent {
  constructor(private _NgQueryBuilderService: NgQueryBuilderService) { }
  @ViewChild('NgQueryBuilderDIV') NgQueryBuilderDIV: any;

  ngOnInit(): void {
    this._NgQueryBuilderService.setupExternalFiles().subscribe((response: boolean) => {
      console.log(response, this.NgQueryBuilderDIV);
      $(this.NgQueryBuilderDIV.nativeElement).queryBuilder({
        icons: {
          add_group: 'fas fa-plus-square',
          add_rule: 'fas fa-plus',
          remove_group: 'fas fa-minus-square',
          remove_rule: 'far fa-trash-alt',
          error: 'fas fa-exclamation-circle'
        },
        filters: [
          {
            id: 'name',
            field: 'username',
            label: {
              en: 'Name',
              fr: 'Nom'
            },
            icon: 'bi-person-fill',
            value_separator: ',',
            type: 'string',
            optgroup: 'core',
            default_value: 'Mistic',
            size: 30,
            validation: {
              allow_empty_value: true
            },
            unique: true
          },
          {
            id: 'age',
            label: 'Age',
            icon: 'bi-calendar3',
            type: 'integer',
            input: 'text',
            value_separator: '|',
            optgroup: 'core',
            description: (rule: any) => {
              if (rule.operator && ['in', 'not_in'].indexOf(rule.operator.type) !== -1) {
                return 'Use a pipe (|) to separate multiple values with "in" and "not in" operators';
              }
              return '';
            }
          },
        ]
      });
    });
  }
}
