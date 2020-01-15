import { Component, OnInit } from '@angular/core';
import { Country } from '../shared/model/country';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../service/country-service.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  country: Country;

  constructor(private root: ActivatedRoute, private router: Router, private countryService: CountryService) {
    this.country = new Country();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.countryService.save(this.country).subscribe(result => this.gotoCountriesList());
  }

  gotoCountriesList() {
    this.router.navigate(['/countries']);
  }

}
