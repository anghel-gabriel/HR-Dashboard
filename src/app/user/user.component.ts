import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() imageSrc!: string;
  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() job!: string;
  @Input() isSelected!: boolean;
}
