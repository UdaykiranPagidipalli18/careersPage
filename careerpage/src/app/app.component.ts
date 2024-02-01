// app.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Card } from './card';
import { CardService } from './card.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Add the standalone property if it's required by your project
  standalone: true,
  imports:[CommonModule]
})
export class AppComponent implements OnInit, OnDestroy {
  public cards: Card[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.subscription = this.cardService.getCards().subscribe(
      (response: Card[]) => {
        this.cards = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
