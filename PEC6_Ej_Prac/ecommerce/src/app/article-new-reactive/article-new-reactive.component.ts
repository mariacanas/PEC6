

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleValidator } from './article-validator';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent {

  article: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.article = this.fb.group({
      name:['', [Validators.required, ArticleValidator.invalidNameValidator]],
      price: ['', [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [Validators.required, Validators.pattern('https?://[a-zA-Z0-9./-]+\\.[a-zA-Z]{2,3}')]],
      enVenta: [false]
    });
  }

 
  onSubmit() {
    this.submitted = true;

    if (this.article.invalid) {
      return;
    }

    //Imprime los valores del articulo por consola
    console.log(this.article.value);
  }
}
