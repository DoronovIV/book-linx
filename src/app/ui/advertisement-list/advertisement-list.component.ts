import { Component, Input, OnInit } from '@angular/core';
import {
  AdvertisementImage,
  AdvertisementListView,
} from 'src/app/model/auxiliary/advertisement-extensions.type';
import { FilterService } from './service/filter.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { priceInterval } from './validation/price.validator';
import { TaskFilter } from './model/task-filter.interface';
import { ViewService } from './service/view.service';
import { FormView } from '../../model/auxiliary/form-view.type';

@Component({
  selector: 'app-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.scss'],
})
export class AdvertisementListComponent implements OnInit {
  @Input()
  public adList!: AdvertisementImage[];

  public filterTaskGroup!: FormGroup;

  public filterTaskInstance!: TaskFilter;

  public formView: FormView = 'proper';

  public get view() {
    return this._viewService.view;
  }

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _filterService: FilterService,
    private readonly _viewService: ViewService,
  ) {}

  public ngOnInit(): void {
    this._createForms();
  }

  public submit(): void {
    this.filterTaskInstance = this.filterTaskGroup.getRawValue();
  }

  private _createForms() {
    this._createTaskGroup();
  }

  private _createTaskGroup() {
    this.filterTaskGroup = this._fb.group(
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

    this.filterTaskGroup.valueChanges.subscribe(() => {
      this.submit();
    });
  }

  public toggleListView() {
    this._viewService.toggleView();
  }
}
