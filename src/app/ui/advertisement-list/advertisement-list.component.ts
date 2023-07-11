import { Component, Input, OnInit } from '@angular/core';
import {
  AdvertisementImage,
  AdvertisementListView,
} from 'src/app/model/auxiliary/advertisement-extensions.type';
import { FilterService } from './service/filter.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { priceInterval } from './validation/price.validator';
import { Filter } from './model/filter.interface';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.scss'],
})
export class AdvertisementListComponent implements OnInit {
  @Input()
  public adList!: AdvertisementImage[];

  @Input()
  public adListViewType!: AdvertisementListView;

  public filterGroup!: FormGroup;

  public submit(): void {
    const filter: Filter = this.filterGroup.getRawValue();
    console.log(filter);

    //filter.apply
  }

  constructor(private readonly _fb: FormBuilder, private readonly _filterService: FilterService) {}

  public ngOnInit(): void {
    this._createForm();
  }

  private _createForm() {
    this.filterGroup = this._fb.group(
      {
        lowerPrice: ['', this._filterService.getPriceValidatorList()],
        higherPrice: ['', this._filterService.getPriceValidatorList()],
        oneRoom: [false],
        twoRooms: [false],
        threeRooms: [false],
        fourRooms: [false],
        area: ['', this._filterService.getAreaValidatorList()],
      },
      {
        validators: priceInterval,
      },
    );

    this.filterGroup.valueChanges.subscribe(() => {
      this.submit();
    });
  }
}
