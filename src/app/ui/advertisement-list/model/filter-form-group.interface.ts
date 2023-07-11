import { FormControl } from '@angular/forms';

export interface FilterFormGroup {
  lowerPrice: FormControl<number>;
  higherPrice: FormControl<number>;
  oneRoom: FormControl<boolean>;
  twoRooms: FormControl<boolean>;
  threeRooms: FormControl<boolean>;
  fourRooms: FormControl<boolean>;
  area: FormControl<number>;
}
