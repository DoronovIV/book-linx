import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementComponent } from './advertisement.component';
import { AdvertisementModule as ContentModule } from 'src/app/ui/advertisement';
import { AdvertisementRoutingModule } from './advertisement-routing.module';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [AdvertisementComponent],
  imports: [CommonModule, AdvertisementRoutingModule, ContentModule, NgImageSliderModule],
  exports: [AdvertisementComponent],
})
export class AdvertisementModule {}
