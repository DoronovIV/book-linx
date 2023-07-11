import { Pipe, PipeTransform } from '@angular/core';
import { AdvertisementImage } from '../model/auxiliary/advertisement-extensions.type';
import { Filter } from '../ui/advertisement-list/model/filter.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(ads: AdvertisementImage[], filter: Filter): AdvertisementImage[] {
    return ads.filter((ad) => {
      const terms: boolean[] = [false, false, false, false, false, false, false];

      if (filter.lowerPrice) {
        if (filter.higherPrice) {
          terms[1] = filter.lowerPrice < ad.price && ad.price < filter.lowerPrice;
        } else terms[1] = true;
        terms[0] = ad.price > filter.lowerPrice;
      } else terms[0] = true;

      if (filter.oneRoom) {
        terms[2] = ad.roomAmount === 1;
      } else terms[2] = true;

      if (filter.twoRooms) {
        terms[3] = ad.roomAmount === 1;
      } else terms[3] = true;

      if (filter.threeRooms) {
        terms[4] = ad.roomAmount === 1;
      } else terms[4] = true;

      if (filter.fourRooms) {
        terms[5] = ad.roomAmount === 1;
      } else terms[5] = true;

      if (filter.area) {
        terms[6] = ad.area;
      } else terms[6] = true;
    });
  }
}
