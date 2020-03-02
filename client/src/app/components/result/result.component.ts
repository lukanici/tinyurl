import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass']
})
export class ResultComponent implements OnInit {
  hostname: string = location.href;
  @Input() code: string;
  btnCaption: string = 'Copy';

  constructor() { }

  ngOnInit(): void {
  }

  onCopy(): void {
    this.btnCaption = 'Copied.';
    setTimeout(() => this.btnCaption = 'Copy', 2000);
  }

}
