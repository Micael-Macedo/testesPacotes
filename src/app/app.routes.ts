import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HelpComponent } from './help/help.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { MapOverviewComponent } from './pages/map-overview/map-overview.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'help', component: HelpComponent},
  {path: 'documentation', component: DocumentationComponent},
  {path: 'map', component: MapOverviewComponent},
  {path: 'statistics', component: StatisticsComponent},

];
