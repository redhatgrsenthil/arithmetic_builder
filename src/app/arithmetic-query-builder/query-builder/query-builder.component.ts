import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.css']
})
export class QueryBuilderComponent implements OnInit {

  @Input() group: any;

  constructor() { }
  operators = [
    { name: '+' },
    { name: '-' },
    { name: '*' },
    { name: '/' }
  ];

  fields = [
    { name: 'Firstname' },
    { name: 'Lastname' },
    { name: 'Birthdate' },
    { name: 'City' },
    { name: 'Country' }
  ];

  conditions = [
    { name: '+' },
    { name: '-' },
    { name: '*' },
    { name: '/' },
  ];

  ngOnInit() {

  }


  addCondition() {
    this.group.rules.push({
      condition: '+',
      lfield: 'Firstname',
      rfield: 'Firstname',
      operator: '+'
    });
  };

  removeCondition(index) {
    this.group.rules.splice(index, 1);
  };

  addGroup() {
    this.group.rules.push({
      group: {
        operator: '+',
        rules: []
      }
    });
  };

  removeGroup = function () {
    "group" in this.group.rules.splice(this.$index, 1);
  };

}
