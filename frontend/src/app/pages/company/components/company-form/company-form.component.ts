import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Company } from '../../../../shared/models/company';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../../../../shared/services/company.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { cnpjValidator } from '../../../../shared/validators/cnpj.validator';

@Component({
  selector: 'app-company-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  templateUrl: './company-form.component.html',
  styleUrl: './company-form.component.scss',
})
export class CompanyFormComponent implements OnInit, OnChanges {
  @Input() company: Company | null = null;
  companyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private router: Router
  ) {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      cnpj: ['', [Validators.required, cnpjValidator()]],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.company);
    if (changes['company'] && changes['company'].currentValue) {
      this.companyForm.patchValue({
        name: this.company?.name || '',
        cnpj: this.company?.cnpj || '',
        address: this.company?.address || '',
        phone: this.company?.phone || '',
        email: this.company?.email || '',
      });
    }
  }

  onSubmit(): void {
    if (this.companyForm.invalid) {
      return;
    }

    console.log(this.companyForm.value);

    const companyData: Company = this.companyForm.value;
    if (this.company?.id) {
      this.companyService
        .updateCompany(this.company.id, companyData)
        .subscribe(() => {
          this.router.navigate(['/companies']);
        });
    } else {
      this.companyService.addCompany(companyData).subscribe(() => {
        this.router.navigate(['/companies']);
      });
    }
  }

  onBack(): void {
    this.router.navigate(['/companies']);
  }
}
