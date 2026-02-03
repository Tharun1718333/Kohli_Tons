import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flag.component.html',
  styleUrl: './flag.component.css'
})
export class FlagComponent {
  @Input() flag_url : string = "";
  @Input() score : number = 0;
  @Input() delay: number = 0;
  @Input() radius: number = 50;
}
 