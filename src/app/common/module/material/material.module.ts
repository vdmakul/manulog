import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatSelectModule, MatToolbarModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonToggleModule, MatCheckboxModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonToggleModule,
    LayoutModule,
    MatMenuModule,
    MatToolbarModule,
    MatCheckboxModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonToggleModule,
    LayoutModule,
    MatMenuModule,
    MatToolbarModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
