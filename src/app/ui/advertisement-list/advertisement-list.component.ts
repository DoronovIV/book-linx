import { Component, Input, OnInit } from '@angular/core';
import {
  AdvertisementImage,
  AdvertisementListView,
} from 'src/app/model/auxiliary/advertisement-extensions.type';
import { FilterService } from './service/filter.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { priceInterval } from './validation/price.validator';
import { Filter } from './model/filter.interface';
import { ViewService } from './service/view.service';

@Component({
  selector: 'app-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.scss'],
})
export class AdvertisementListComponent implements OnInit {
  @Input()
  public adList!: AdvertisementImage[];

  public adListViewType: AdvertisementListView = 'grid';

  public filterGroup!: FormGroup;

  public filterInstance!: Filter;

  public get view() {
    return this._viewService.view;
  }

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _filterService: FilterService,
    private readonly _viewService: ViewService,
  ) {}

  public ngOnInit(): void {
    this._createForm();
  }

  public submit(): void {
    this.filterInstance = this.filterGroup.getRawValue();
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

  public toggleListView() {
    this._viewService.toggleView();
  }
}
