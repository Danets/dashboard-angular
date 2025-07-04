import { Component, HostListener, input } from '@angular/core';
import { IAccounts } from '../../../core/models/models';

@Component({
  selector: 'app-accounts',
  imports: [],
  templateUrl: './accounts.html',
  styleUrl: './accounts.scss',
})
export class Accounts {
  readonly data = input.required<IAccounts[]>();
  menuId: string | null = null;

  winnabilityDots = [1, 2, 3, 4];

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.cell-actions')) {
      this.menuId = null;
    }
  }

  toggleMenu(event: MouseEvent, id: string) {
    // event.stopPropagation();
    this.menuId = this.menuId === id ? null : id;
  }

  getClassNameForChip(type: string) {
    const convertedType = Number(type.slice(0, -1));
    if (convertedType < 35) {
      return 'green';
    } else if (convertedType > 35 && convertedType < 60) {
      return 'yellow';
    } else {
      return 'red';
    }
  }
  getClassNameForStatus(status: string) {
    const classList = {
      active: status === 'Active',
      review: status === 'Under review',
    };
    return classList;
  }
}
