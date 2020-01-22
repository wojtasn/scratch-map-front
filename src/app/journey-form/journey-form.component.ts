import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../shared/model/country';
import { CountryService } from '../service/country-service.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Journey } from '../shared/model/journey';
import { User } from '../shared/model/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-journey-form',
  templateUrl: './journey-form.component.html',
  styleUrls: ['./journey-form.component.css']
})
export class JourneyFormComponent implements OnInit {

  countries: Observable<Array<Country>>
  journey: Journey;
  newjourney: FormGroup;
  selectedCountry: number;

  constructor(private countryService: CountryService, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.journey = { name: null, country: null };
    this.countries = this.countryService.findAll();
    this.newjourney = new FormGroup({
      name: new FormControl(''),
      country: new FormControl(''),
    });
  }

  onSubmit() {
    this.journey.country = this.newjourney.controls.country.value;
    this.journey.name = this.newjourney.controls.name.value;
    console.log(this.journey);
    this.userService.addNewJourney(+this.activatedRoute.snapshot.paramMap.get('id'), this.journey).subscribe(result => this.goToCountriesList());
  }

  goToCountriesList() {
    this.router.navigate(['/countries']);
  }
}
