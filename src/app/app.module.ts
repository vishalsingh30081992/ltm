import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { CostStructureComponent } from './components/pages/cost-structure/cost-structure.component';
import { DefaultMappingComponent } from './components/pages/default-mapping/default-mapping.component';
import { CostLookupComponent } from './components/pages/cost-lookup/cost-lookup.component';

const routes: Routes = [
  {
    path : '',
    component: LoginComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'home',
    component: HomeComponent
  },
  {
    path : 'cost-structure',
    component: CostStructureComponent
  },
  {
    path : 'default-mapping',
    component: DefaultMappingComponent
  },
  {
    path : 'cost-lookup',
    component: CostLookupComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    CostStructureComponent,
    DefaultMappingComponent,
    CostLookupComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule, 
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
