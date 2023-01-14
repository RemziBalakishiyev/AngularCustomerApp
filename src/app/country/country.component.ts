import { Component, OnInit } from '@angular/core';
import { count, first, from } from 'rxjs';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  constructor(private countryService: CountryService) {}
  countryData;
  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    this.countryService.getCountries().subscribe({
      next: (country) => {
        this.countryData = country;
        console.log(this.countryData);
      },
      error: (error) => {
        console.log('Some error happended');
      },
      complete: () => {
        console.log('Task completed!');
      },
    });
  }
}
