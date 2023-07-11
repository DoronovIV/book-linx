import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementListComponent } from './advertisement-list.component';
import { AdvertisementModule } from '../advertisement/advertisement.module';

@NgModule({
  declarations: [AdvertisementListComponent],
  imports: [CommonModule, AdvertisementModule],
  exports: [AdvertisementListComponent],
})
export class AdvertisementListModule {}
