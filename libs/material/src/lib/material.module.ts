import { NgModule } from '@angular/core';
// import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatTableModule,
  MatTooltipModule,
  MatSelectModule,
  MatChipsModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    // FlexLayoutModule,
    MatChipsModule,
    MatTooltipModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  exports: [
    // FlexLayoutModule,
    MatChipsModule,
    MatTooltipModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class MaterialModule {}
