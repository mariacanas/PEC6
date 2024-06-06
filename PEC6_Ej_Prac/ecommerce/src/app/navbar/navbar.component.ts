import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  @Output() componenteMostrar = new EventEmitter<string>();

  mostrarComponente(component: string) {
    this.componenteMostrar.emit(component);
  }

}
