import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../shared/model/user';
import { Country } from '../shared/model/country';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<User>;
  countries: Observable<Array<Country>>;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => this.users = data);
  }

  showCountries(userId: number) {
    this.countries = this.userService.showUsersCountries(userId);
  }

  showFormForNewJourney(userId: number) {
    this.router.navigate(["/addjourney/" + userId]);
  }

}
