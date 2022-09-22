import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormListClientComponent } from './core/components/form-list-client/form-list-client.component';
import { AnalisysClientLisComponent } from './core/components/analisys-client-lis/analisys-client-lis.component';

const routes: Routes = [
  {path: '', component: FormListClientComponent},
  {path: 'analisysClient', component: AnalisysClientLisComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
