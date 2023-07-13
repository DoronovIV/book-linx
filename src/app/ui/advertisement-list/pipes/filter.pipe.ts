import { Pipe, PipeTransform } from '@angular/core';
import { AdvertisementImage } from '../../../model/auxiliary/advertisement-extensions.type';
import { Filter } from '../model/filter.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(ads: AdvertisementImage[], filter: Filter): AdvertisementImage[] {
    return ads.filter((ad) => {
      const numberTerms: boolean[] = [false, false, false];
      const roomTerms: boolean[] = [false, false, false, false];

      if (!filter) return true;

      if (filter.lowerPrice) {
        if (filter.higherPrice) {
          numberTerms[1] =
            Number(filter.lowerPrice) < ad.price && ad.price < Number(filter.higherPrice);
          numberTerms[0] = numberTerms[1];
        } else {
          numberTerms[0] = ad.price > Number(filter.lowerPrice);
          numberTerms[1] = true;
        }
      } else {
        if (filter.higherPrice) {
          numberTerms[0] = true;
          numberTerms[1] = Number(filter.higherPrice) > ad.price;
        } else {
          numberTerms[0] = true;
          numberTerms[1] = true;
        }
      }

      if (filter.oneRoom) {
        roomTerms[0] = ad.roomAmount == 1;
      } else roomTerms[0] = true;

      if (filter.twoRooms) {
        roomTerms[1] = ad.roomAmount == 2;
      } else roomTerms[1] = true;

      if (filter.threeRooms) {
        roomTerms[2] = ad.roomAmount == 3;
      } else roomTerms[2] = true;

      if (filter.fourRooms) {
        roomTerms[3] = ad.roomAmount == 4;
      } else roomTerms[3] = true;

      if (filter.area) {
        numberTerms[2] = ad.area >= filter.area;
      } else numberTerms[2] = true;

      let result = true;

      numberTerms.forEach((term: boolean) => {
        result = result && term;
      });

      roomTerms.forEach((term: boolean) => {
        result = result && term;
      });

      return result === true;
    });
  }
}
