import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capculator',
  templateUrl: './capculator.component.html',
  styleUrls: ['./capculator.component.css']
})
export class CapculatorComponent implements OnInit {
  st1: number;
  st2: number;
  result: number;

  constructor() { }

  ngOnInit() {
  }
  capculate() {
    this.st1 = parseInt(document.getElementById('st1').value);
    this.st2 = parseInt(document.getElementById('st2').value);
    this.result = this.st1 + this.st2;
    document.getElementById('result').innerHTML = this.result;
  }

}
