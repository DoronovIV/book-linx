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
import { MatInputModule } from '@angular/material/input';
import { TaskAccurateFilterPipe } from 'src/app/ui/advertisement-list/pipes/task-accurate-filter.pipe';

@NgModule({
  declarations: [AdvertisementListComponent, TaskAccurateFilterPipe],
  imports: [
    CommonModule,
    AdvertisementModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [AdvertisementListComponent],
})
export class AdvertisementListModule {}
