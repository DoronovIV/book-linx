import { Component, Input } from '@angular/core';
import {
  AdvertisementUI,
  AdvertisementView,
} from 'src/app/model/auxiliary/advertisement-extensions.type';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement-catalog.component.scss', './advertisement-page.component.scss'],
})
export class AdvertisementComponent {
  @Input()
  public ad!: AdvertisementUI;

  @Input()
  public viewType!: AdvertisementView;
}
