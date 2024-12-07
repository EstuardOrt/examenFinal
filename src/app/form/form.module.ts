import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormPageRoutingModule } from './form-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormPage } from './form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [FormPage]
})
export class FormPageModule {}
