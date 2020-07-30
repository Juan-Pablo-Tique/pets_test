import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { PetsComponent } from './pets.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PetsComponent, PetFormComponent, PetListComponent],
  imports: [CommonModule, PetsRoutingModule, ReactiveFormsModule],
})
export class PetsModule {}
