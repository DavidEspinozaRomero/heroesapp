import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'image',
  // pure: false,
})
export class ImagePipe implements PipeTransform {
  transform(heroe: Hero, ...args: any[]): string {
    // if (heroe.hasOwnProperty('alt_img')) {
    //   return heroe.alt_img!
    // }
    if (!heroe.id && !heroe.alt_img) {
      return 'assets/no-image.png';
    } else if (heroe.alt_img) {
      return heroe.alt_img;
    } else {
      return `assets/heroes/${heroe.id}.jpg`;
    }
  }
}
