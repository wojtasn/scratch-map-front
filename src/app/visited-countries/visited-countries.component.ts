import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../service/user.service';
import { Country } from '../shared/model/country';

@Component({
  selector: 'app-visited-countries',
  templateUrl: './visited-countries.component.html',
  styleUrls: ['./visited-countries.component.css']
})
export class VisitedCountriesComponent implements OnInit {

  @Input()
  countries: Array<Country>;

  constructor() {

  }

  ngOnInit() {
  }

}
