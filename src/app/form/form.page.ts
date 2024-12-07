import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface FormData {
  nombre: string;
  apellido: string;
  edad: number;
  correo: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage {
  formulario: FormGroup;
  datos: FormData[] = [];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, Validators.minLength(5)]],
      edad: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      correo: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.datos.push(this.formulario.value);
      this.formulario.reset();
      console.log('Datos guardados:', this.datos);
    }
  }
}
