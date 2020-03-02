import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  code: string;

  constructor() { }

  ngOnInit(): void {
  }

  generatedCode(code: string): void {
    this.code = code;
  }

}
