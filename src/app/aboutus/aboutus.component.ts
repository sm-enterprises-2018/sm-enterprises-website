import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {

  description: string = ``;
  mission: string = `Empowering careers and businesses by delivering unmatched value, fostering lasting partnerships, and driving success through our commitment to excellence.`;
  vision: string = `To redefine the recruitment landscape by leading with innovation, setting unparalleled standards of quality, and building trust through every connection.`;



}
