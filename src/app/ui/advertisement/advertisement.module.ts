import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementComponent } from './advertisement.component';
import { NgImageSliderModule } from 'ng-image-slider'; // DO NOT REMOVE;
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdvertisementComponent],
  imports: [CommonModule, MatIconModule, MatSnackBarModule, RouterModule],
  exports: [AdvertisementComponent],
})
export class AdvertisementModule {}
