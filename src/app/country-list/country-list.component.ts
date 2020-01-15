import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/country-service.service';
import { Country } from '../shared/model/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Array<Country>;

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.countryService.findAll().subscribe(data => this.countries = data)
  }

}
