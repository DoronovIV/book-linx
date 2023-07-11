import { Component, Input } from '@angular/core';
import { Advertisement } from 'src/app/model/main/advertisement.interface';
import {
  AdvertisementImage,
  AdvertisementListView,
} from 'src/app/model/auxiliary/advertisement-extensions.type';

@Component({
  selector: 'app-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.scss'],
})
export class AdvertisementListComponent {
  @Input()
  public adList!: AdvertisementImage[];

  @Input()
  public adListViewType!: AdvertisementListView;
}
