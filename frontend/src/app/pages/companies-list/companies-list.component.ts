import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../shared/services/company.service';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CompanyCardComponent } from '../../shared/components/company-card/company-card.component';
import { Router } from '@angular/router';

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

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit() {
    this.companyService.getCompanies().subscribe((data: any[]) => {
      this.companies = data;
    });
  }

  addCompany() {
    this.router.navigate(['/companies/add']);
  }

  editCompany(companyId: number) {
    this.router.navigate([`/companies/edit/${companyId}`]);
  }

  deleteCompany(companyId: number) {}
}
