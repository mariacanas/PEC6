import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
  standalone: true
})
export class DefaultImagePipe implements PipeTransform {

  transform(imageUrl: string): string {
    return imageUrl ? imageUrl : './assets/images/defecto.jpg';
  }

}
