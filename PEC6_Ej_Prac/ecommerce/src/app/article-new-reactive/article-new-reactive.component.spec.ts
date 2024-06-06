import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNewReactiveComponent } from './article-new-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ArticleNewReactiveComponent', () => {
  let component: ArticleNewReactiveComponent;
  let fixture: ComponentFixture<ArticleNewReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleNewReactiveComponent,ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleNewReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
