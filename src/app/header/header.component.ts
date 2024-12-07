import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title: string = '';

  constructor(private router: Router) {}

  goBack() {
    if (this.title === 'Formulario') {
      this.router.navigate(['/home']);
    }
  }
}
