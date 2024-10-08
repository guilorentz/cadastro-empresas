import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../shared/services/company.service';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CompanyCardComponent } from '../../shared/components/company-card/company-card.component';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { ExpandableButtonComponent } from '../../shared/components/expandable-button/expandable-button.component';

@Component({
  selector: 'app-companies-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonComponent,
    ExpandableButtonComponent,
    CompanyCardComponent,
    ConfirmDialogComponent,
  ],
  templateUrl: './companies-list.component.html',
  styleUrl: './companies-list.component.scss',
})
export class CompaniesListComponent implements OnInit {
  companies: any[] = [];
  showConfirmDialog: boolean = false;
  companyIdToDelete: number | null = null;

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

  deleteCompany(companyId: number) {
    this.companyIdToDelete = companyId;
    this.showConfirmDialog = true;
  }

  confirmDelete() {
    if (this.companyIdToDelete !== null) {
      this.companyService
        .deleteCompany(this.companyIdToDelete)
        .subscribe(() => {
          this.companies = this.companies.filter(
            (company) => company.id !== this.companyIdToDelete
          );
          this.showConfirmDialog = false;
          this.companyIdToDelete = null;
        });
    }
  }

  cancelDelete() {
    this.showConfirmDialog = false;
    this.companyIdToDelete = null;
  }
}
