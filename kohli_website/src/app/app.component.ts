import { Component } from '@angular/core';
import { CountryComponent } from "./country/country.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CountryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kohli_website';
  af_flag = "../assets/afghanistan_round_icon_64.png"; // 1
  zm_flag = "../assets/zimbabwe-flag-icon.png"; // 1
  pk_flag = "../assets/pakistan-flag-round-circle-icon.png"; // 3
  ba_flag = "../assets/bangladesh-flag-round-circle-icon.png"; // 7
  sa_flag = "../assets/south-africa-flag-round-circle-icon.png"; // 8
  eg_flag = "../assets/uk-flag-round-circle-icon.png"; // 8
  nz_flag = "../assets/new-zealand-flag-round-circle-icon.png"; // 9
  wi_flag = "../assets/westIndie_cricket_logo.jpg"; // 12
  sl_flag = "../assets/sri-lanka-flag-round-circle-icon.png"; // 15
  au_flag = "../assets/australia-flag-round-circle-icon.png"; // 16
}
