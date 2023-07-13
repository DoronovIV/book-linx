import { Component, Input } from '@angular/core';
import {
  AdvertisementExtended,
  AdvertisementView,
} from 'src/app/model/auxiliary/advertisement-extensions.type';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement-catalog.component.scss', './advertisement-page.component.scss'],
})
export class AdvertisementComponent {
  @Input()
  public ad!: AdvertisementExtended;

  @Input()
  public viewType!: AdvertisementView;
}
