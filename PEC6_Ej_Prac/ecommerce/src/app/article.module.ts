import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { HttpClientModule } from '@angular/common/http';
import { DefaultImagePipe } from './default-image.pipe';

@NgModule({
  declarations: [
    ArticleItemComponent,
    ArticleListComponent,
    ArticleNewReactiveComponent,
    ArticleNewTemplateComponent  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DefaultImagePipe  
  ],
  exports: [
    ArticleItemComponent,
    ArticleListComponent,
    ArticleNewReactiveComponent,
    ArticleNewTemplateComponent
  ]
})
export class ArticleModule { }
