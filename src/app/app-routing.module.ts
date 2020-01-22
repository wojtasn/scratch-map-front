import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryFormComponent } from './country-form/country-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { JourneyFormComponent } from './journey-form/journey-form.component';


const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'countries', component: CountryListComponent },
  { path: 'addcountry', component: CountryFormComponent },
  { path: 'addjourney/:id', component: JourneyFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
