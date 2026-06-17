import { Component } from '@angular/core';
import { LucideClock, LucideLayoutList, LucideLoader, LucideCircleCheck } from '@lucide/angular';

@Component({
  selector: 'app-overview-card',
  standalone: true,
  imports: [LucideClock, LucideLayoutList, LucideLoader, LucideCircleCheck],
  templateUrl: './overview-card.html',
  styleUrl: './overview-card.css',
})
export class OverviewCard {}
