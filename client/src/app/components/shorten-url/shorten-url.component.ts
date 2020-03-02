import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.sass']
})
export class ShortenUrlComponent implements OnInit {
  originalUrl: string;

  @Output() generatedCode: EventEmitter<string> = new EventEmitter<string>();

  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.urlService.shortenUrl(this.originalUrl).subscribe(url => {
      this.generatedCode.emit(url.code);
    });
  }

}
