import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementComponent } from './advertisement.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [AdvertisementComponent],
  imports: [CommonModule],
  exports: [AdvertisementComponent],
})
export class AdvertisementModule {}
