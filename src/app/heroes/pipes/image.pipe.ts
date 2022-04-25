import { Pipe, PipeTransform } from "@angular/core";
import { Hero } from "../interfaces/heroes.interfaces";

@Pipe({
  name: "image",
})
export class NamePipe implements PipeTransform {
  transform(heroe: Hero, ...args: any[]): string {
    if (heroe?.hasOwnProperty("id")) {
      return `assets/heroe/${heroe.id}.jpg`;
    } else {
      return "assets/no-image.png";
    }
  }
}
