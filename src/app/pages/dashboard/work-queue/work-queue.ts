import { Component, HostListener, input } from '@angular/core';
import { IWorkQueue } from '../../../core/models/models';

@Component({
  selector: 'app-work-queue',
  imports: [],
  templateUrl: './work-queue.html',
  styleUrl: './work-queue.scss',
})
export class WorkQueue {
  readonly data = input.required<IWorkQueue[]>();
  menuId: string | null = null;

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

  getFirstLetter(name: string): string {
    return name
      .split(' ')
      .map((word: string) => word.charAt(0))
      .join('');
  }

  getClassName(status: string) {
    const classList = {
      new: status === 'New',
      pending: status === 'Pending Review',
      completed: status === 'Completed',
    };
    return classList;
  }
}
