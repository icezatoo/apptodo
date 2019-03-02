import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { MaterialModule } from '@apptodo/material';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [LayoutComponent],
  declarations: [LayoutComponent]
})
export class LayoutModule {}
