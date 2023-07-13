import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementComponent } from './advertisement.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AdvertisementComponent],
  imports: [CommonModule, MatIconModule],
  exports: [AdvertisementComponent],
})
export class AdvertisementModule {}
