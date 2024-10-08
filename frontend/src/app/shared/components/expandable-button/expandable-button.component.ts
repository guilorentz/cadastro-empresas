import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expandable-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expandable-button.component.html',
  styleUrls: ['./expandable-button.component.scss'],
})
export class ExpandableButtonComponent {
  @Input() svgPath: string = '';
  @Input() text: string = '';
  @Input() disabled = false;
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  }
}
