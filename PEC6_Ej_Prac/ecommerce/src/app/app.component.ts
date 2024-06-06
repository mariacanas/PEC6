

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleModule } from "./article.module";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        RouterOutlet,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NavbarComponent,
        ArticleModule
    ]
})
export class AppComponent {
  title = 'ecommerce';
  componenteDefecto = 'list';

  mostrarComponente(arg0: string) {
    this.componenteDefecto = arg0;
  }
}
