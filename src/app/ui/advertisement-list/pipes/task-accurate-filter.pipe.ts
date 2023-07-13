import { Pipe, PipeTransform } from '@angular/core';
import { AdvertisementExtended } from '../../../model/auxiliary/advertisement-extensions.type';
import { TaskFilter } from '../model/task-filter.interface';

@Pipe({
  name: 'taskfilter',
})
export class TaskAccurateFilterPipe implements PipeTransform {
  transform(ads: AdvertisementExtended[], filter: TaskFilter): AdvertisementExtended[] {
    return ads.filter((ad) => {
      const numberTerms: boolean[] = [false, false, false];

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

      if (filter.area) {
        numberTerms[2] = ad.area >= filter.area;
      } else numberTerms[2] = true;

      let strictNumericResult = true;
      let easyRoomResult = true;

      numberTerms.forEach((term: boolean) => {
        strictNumericResult = strictNumericResult && term;
      });

      const adRoomMap = this._getAdRoomMap(ad);
      const filterRoomMap = this._getFilterRoomMap(filter);

      if (filterRoomMap.includes(true)) {
        easyRoomResult = false;
        for (let i = 0, iSize = 4; i < iSize; i++) {
          if (adRoomMap[i]) {
            if (filterRoomMap[i]) {
              easyRoomResult = true;
              break;
            }
          }
        }
      }

      return strictNumericResult && easyRoomResult;
    });
  }

  private _getAdRoomMap(ad: AdvertisementExtended): boolean[] {
    const map: boolean[] = [false, false, false, false];
    map[ad.roomAmount - 1] = true;
    return map;
  }

  private _getFilterRoomMap(filter: TaskFilter): boolean[] {
    const map: boolean[] = [false, false, false, false];

    if (filter.oneRoom) map[0] = true;
    if (filter.twoRooms) map[1] = true;
    if (filter.threeRooms) map[2] = true;
    if (filter.fourRooms) map[3] = true;

    return map;
  }
}
