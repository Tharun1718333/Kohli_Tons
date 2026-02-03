import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FlagComponent } from '../flag/flag.component';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule,FlagComponent],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
  @Input() flag_url : string = "../../assets/afghanistan_round_icon_64.png";
  @Input() scores   : number[] = [118,100,115,117,106]; 
  @Input() timings  : number[] = [1,2,3,4,5]; 
  @Input() radius : number = 50;
  sample_url : string = "../../assets/afghanistan_round_icon_64.png";
  sample_score: number = 100; 
}
