import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementListComponent } from './advertisement-list.component';
import { AdvertisementModule } from '../advertisement/advertisement.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [AdvertisementListComponent],
  imports: [
    CommonModule,
    AdvertisementModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule
  ],
  exports: [AdvertisementListComponent],
})
export class AdvertisementListModule {}
