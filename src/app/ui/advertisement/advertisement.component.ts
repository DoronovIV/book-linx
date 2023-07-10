import { Component, Input } from '@angular/core';
import { AdvertisementImage, AdvertisementView } from 'src/app/types/advertisement-extensions.type';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement-catalog.component.scss', './advertisement-page.component.scss'],
})
export class AdvertisementComponent {
  @Input()
  public ad!: AdvertisementImage;

  @Input()
  public viewType!: AdvertisementView;
}
