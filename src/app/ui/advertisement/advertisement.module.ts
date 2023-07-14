import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementComponent } from './advertisement.component';
import { NgImageSliderModule } from 'ng-image-slider'; // DO NOT REMOVE;
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AdvertisementComponent],
  imports: [CommonModule, MatIconModule, MatSnackBarModule],
  exports: [AdvertisementComponent],
})
export class AdvertisementModule {}
