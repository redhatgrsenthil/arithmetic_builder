import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arithmetic-query-builder',
  templateUrl: './arithmetic-query-builder.component.html',
  styleUrls: ['./arithmetic-query-builder.component.css']
})
export class ArithmeticQueryBuilderComponent implements OnInit {

  
  data = '{"group": {"operator": "+","rules": []}}';
  filter = JSON.parse(this.data);
  
  json;
  output 

  constructor() { }

  computed(group) {
    if (!group) return "";
        for (var str = "(", i = 0; i < group.rules.length; i++) {
            i > 0 && (str += " " + group.operator + " ");
            str += group.rules[i].group ?
                this.computed(group.rules[i].group) :
                group.rules[i].lfield + " " + (group.rules[i].condition) + " " + group.rules[i].rfield;
        }

        return str + ")";
}

  save(){
    this.output = this.computed(this.filter.group);
    
  }

  ngOnInit() {
    console.log(this.filter);
  }

}
