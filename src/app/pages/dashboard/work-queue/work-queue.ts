import { Component, input } from '@angular/core';
import { IWorkQueue } from '../../../core/models/models';

@Component({
  selector: 'app-work-queue',
  imports: [],
  templateUrl: './work-queue.html',
  styleUrl: './work-queue.scss',
})
export class WorkQueue {
  data = input.required<IWorkQueue[]>();
}
