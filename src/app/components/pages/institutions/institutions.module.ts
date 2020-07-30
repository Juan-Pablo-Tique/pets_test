import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionsRoutingModule } from './institutions-routing.module';
import { InstitutionsComponent } from './institutions.component';
import { InstitutionFormComponent } from './institution-form/institution-form.component';
import { InstitutionListComponent } from './institution-list/institution-list.component';


@NgModule({
  declarations: [InstitutionsComponent, InstitutionFormComponent, InstitutionListComponent],
  imports: [
    CommonModule,
    InstitutionsRoutingModule
  ]
})
export class InstitutionsModule { }
