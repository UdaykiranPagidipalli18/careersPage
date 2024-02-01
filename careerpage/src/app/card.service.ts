import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './card';
import { environment } from '../environments/environment';


@Injectable({
    providedIn: 'root',
})
@NgModule({
  providers:[CardService],
  imports: [
    // ... other imports
    HttpClientModule,
    
  ],
  // ...
})
export class CardService {
  // card.service.ts
private apiServerUrl = (environment as any).apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getCards(): Observable<Card[]> {
    return this.http.get<Card[]>('${this.apiServerUrl}/card/all');
  }

  public addCard(card: Card): Observable<Card> {
    return this.http.post<Card>('${this.apiServerUrl}/card/add', card);
  }

  public updateCard(card: Card): Observable<Card> {
    return this.http.put<Card>('${this.apiServerUrl}/card/update', card);
  }

  public deleteCard(cardId: number): Observable<void> {
    return this.http.delete<void>('${this.apiServerUrl}/card/delete/${cardId}');
  }
}
