import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../../shared/models/company';
import { CompanyService } from '../../shared/services/company.service';
import { CompanyFormComponent } from './components/company-form/company-form.component';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CompanyFormComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
})
export class CompanyComponent implements OnInit {
  company: Company | null = null;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    const companyId = this.route.snapshot.paramMap.get('id');
    if (companyId) {
      this.companyService
        .getCompanyById(+companyId)
        .subscribe((data: Company) => {
          this.company = data;
        });
    }
  }
}
