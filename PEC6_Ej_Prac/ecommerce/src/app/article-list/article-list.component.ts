import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ArticleService } from '../article-service.service';

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit{
  
  articles$!: Observable<Article[]>;
  private buscar = new Subject<string>();
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articles$ = this.buscar.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.articleService.getArticles(term))
    );
  }
  search(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.buscar.next(input.value);
  }
  handleArticleQuantityChange(event: { article: Article, quantity: number }): void {
    this.articleService.changeQuantity(event.article.id, event.quantity).subscribe();
    // Aquí puedes manejar el evento, como enviar los datos actualizados al servidor o actualizar el estado en el componente padre
    console.log('Cantidad de artículo modificada:', event);
  }
}
