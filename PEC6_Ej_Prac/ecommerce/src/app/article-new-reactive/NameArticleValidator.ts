

import { AbstractControl, ValidatorFn } from '@angular/forms';

export class NameArticleValidator {
  static invalidNameValidator: ValidatorFn = (control: AbstractControl) => {
    const value: string = control.value;
    const names: string[] = ['Prueba', 'Test','Mock', 'Fake'];
    
    if (names.includes(value)) {
      return { invalidArticle: true };
    }

    return null;
  };
}
