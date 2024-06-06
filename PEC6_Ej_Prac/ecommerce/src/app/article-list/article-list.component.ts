import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { Observable } from 'rxjs';
import { ArticleService } from '../article-service.service';

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit{
  
  articles$!: Observable<Article[]>;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articles$ = this.articleService.getArticles();
  }

    handleArticleQuantityChange(event: { article: Article, quantity: number }): void {
      // Aquí puedes manejar el evento, como enviar los datos actualizados al servidor o actualizar el estado en el componente padre
      console.log('Cantidad de artículo modificada:', event);
    }
}
