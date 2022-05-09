import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(heroe: Hero, ...args: any[]): string {
    if (heroe.hasOwnProperty('alt_img')) {
      return heroe.alt_img!
    }
    if (heroe.id) {
      return `assets/heroes/${heroe.id}.jpg`;
    } else {
      return 'assets/no-image.png';
    }
  }
}
