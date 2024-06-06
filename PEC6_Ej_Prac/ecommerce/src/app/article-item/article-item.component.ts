import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output  } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent implements OnInit {
 
  @Input() article: Article;
  @Output() articleQuantityChange: EventEmitter<{ article: Article, quantity: number }> = new EventEmitter();
  
  constructor() {
    this.article = { name: '', imageUrl: '', price: 0, isOnSale: false, quantityInCart: 0 }; // Valor inicial
  }
  ngOnInit(): void {
  }

  incrementQuantity(): void {
    this.article.quantityInCart++;
    this.articleQuantityChange.emit({ article: this.article, quantity: this.article.quantityInCart });
  }

  decrementQuantity(): void {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
      this.articleQuantityChange.emit({ article: this.article, quantity: this.article.quantityInCart });
    }
  }
}