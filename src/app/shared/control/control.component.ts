import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // to use its CSS style as global style.
  host:{
    class: 'control'
  }
})
export class ControlComponent {
  label = input.required<string>();
}
