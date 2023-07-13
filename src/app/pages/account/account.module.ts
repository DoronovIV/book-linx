import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, AccountRoutingModule, MatIconModule, MatTooltipModule],
  exports: [AccountComponent],
})
export class AccountModule {}
