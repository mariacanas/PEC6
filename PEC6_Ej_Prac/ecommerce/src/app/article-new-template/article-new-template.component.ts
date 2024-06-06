



import { Component } from '@angular/core';

@Component({
    selector: 'app-article-new-template',
    templateUrl: './article-new-template.component.html',
    styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent {
    
  onSubmit(form: any) {
    if (form.valid) {
        //Imprime los valores del articulo por consola
      console.log(form.value);
    }
  }
}
