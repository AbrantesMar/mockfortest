import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MockAdtComponent } from './mock-adt/mock-adt.component';
import { MockAdtCreateComponent } from './mock-adt-create/mock-adt-create.component';
import { MockService } from './services/MockService';

const routes: Routes = [
  {
    path: 'adts',
    component: MockAdtComponent,
    data: { title: 'Mock Adt' }
  },
  {
    path: 'adt-create',
    component: MockAdtCreateComponent,
    data: { title: 'Criar Novo' }
  },
  {
    path: '',
    redirectTo: '/adts',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MockAdtComponent,
    MockAdtCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
    )
  ],
  providers: [
    MockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
