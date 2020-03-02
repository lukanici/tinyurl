import { Component, OnInit } from '@angular/core';
import { Domain } from 'src/app/models/Domain';
import { DomainService } from 'src/app/services/domain.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  domains: Domain[];

  constructor(private domainService: DomainService) { }

  ngOnInit(): void {
    this.domainService.getDomains().subscribe(domains => {
      this.domains = domains;
    });
  }

}
