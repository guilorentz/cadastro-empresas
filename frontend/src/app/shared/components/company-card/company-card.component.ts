import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Company } from '../../models/company';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-company-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss'],
})
export class CompanyCardComponent {
  @Input() company!: Company;
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onEdit() {
    this.edit.emit(this.company.id);
  }

  onDelete() {
    this.delete.emit(this.company.id);
  }
}
