import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArticleItemComponent,
    ArticleListComponent,
    ArticleNewReactiveComponent,
    ArticleNewTemplateComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports: [
    ArticleItemComponent,
    ArticleListComponent,
    ArticleNewReactiveComponent,
    ArticleNewTemplateComponent
  ]
})
export class ArticleModule { }
