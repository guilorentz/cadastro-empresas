import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../shared/services/company.service';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CompanyCardComponent } from '../../shared/components/company-card/company-card.component';

@Component({
  selector: 'app-companies-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonComponent,
    CompanyCardComponent,
  ],
  templateUrl: './companies-list.component.html',
  styleUrl: './companies-list.component.scss',
})
export class CompaniesListComponent implements OnInit {
  companies: any[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companyService.getCompanies().subscribe((data: any[]) => {
      this.companies = data;
    });
  }

  editCompany(companyId: number) {}

  deleteCompany(companyId: number) {}

  addCompany() {}
}
