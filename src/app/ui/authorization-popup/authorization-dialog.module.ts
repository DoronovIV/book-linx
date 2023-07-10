import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthorizationDialogComponent } from './authorization-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AuthorizationDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [AuthorizationDialogComponent],
})
export class AuthorizationDialogModule {}
