import { Component } from '@angular/core';
import { Article } from '../article.model';

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrl: './article-list.component.css'
})
export class ArticleListComponent {

  articles: Article[] = [
    {
      name: 'Zapatillas',
      imageUrl: '../assets/images/zapatillas.jpg',
      price: 100,
      isOnSale: true,
      quantityInCart: 0
    },
    {
      name: 'Pantalon',
      imageUrl: './assets/images/pantalones.jpeg',
      price: 50,
      isOnSale: false,
      quantityInCart: 0
    },
    {
      name: 'Camiseta',
      imageUrl: './assets/images/camiseta.jpeg',
      price: 20,
      isOnSale: true,
      quantityInCart: 0
    }];

    handleArticleQuantityChange(event: { article: Article, quantity: number }): void {
      // Aquí puedes manejar el evento, como enviar los datos actualizados al servidor o actualizar el estado en el componente padre
      console.log('Cantidad de artículo modificada:', event);
    }
}
