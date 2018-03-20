import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingComponent } from './pages/page-one/setting.component';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { SettingModule } from './pages/page-one/setting.module';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: HomeComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    // SettingComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SettingModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
