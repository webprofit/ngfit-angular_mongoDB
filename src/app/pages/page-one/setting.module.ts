import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from '../../pages/page-one/setting.component';


const routes: Routes = [
  {path: 'setting', component: SettingComponent},
];


@NgModule({
  declarations: [
    SettingComponent,
  ],
  imports: [
    RouterModule.forChild(routes),

  ],
  providers: [
  ],

})
export class SettingModule { }
