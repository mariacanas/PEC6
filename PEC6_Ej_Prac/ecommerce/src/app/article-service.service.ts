import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = [
    { id: 1, name: 'Zapatillas', imageUrl: './assets/images/zapatillas.jpg', price: 100, isOnSale: true, quantityInCart: 0 },
    { id: 2, name: 'Pantalon', imageUrl: './assets/images/pantalones.jpeg', price: 50, isOnSale: false, quantityInCart: 0 },
    { id: 3, name: 'Camiseta', imageUrl: './assets/images/camiseta.jpeg', price: 20, isOnSale: true, quantityInCart: 0 }
  ];

  private articlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>(this.articles);

  getArticles(): Observable<Article[]> {
    return this.articlesSubject.asObservable();
  }

  changeQuantity(articleId: number, changeInQuantity: number): Observable<Article | undefined> {
    const article = this.articles.find(a => a.id === articleId);
    if (article) {
      article.quantityInCart += changeInQuantity;
      if (article.quantityInCart < 0) {
        article.quantityInCart = 0;
      }
      this.articlesSubject.next(this.articles);
    }
    return new BehaviorSubject<Article | undefined>(article).asObservable();
  }

  create(article: Article): Observable<any> {
    this.articles.push(article);
    this.articlesSubject.next(this.articles);
    return new BehaviorSubject<any>(article).asObservable();
  }
}
