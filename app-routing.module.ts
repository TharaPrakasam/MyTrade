import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportConfigurationComponent } from './report-configuration/report-configuration.component';
import { StaticDataComponent } from './static-data/static-data.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: 'reportConfig', component: ReportConfigurationComponent},
  {path: 'staticData', component: StaticDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
