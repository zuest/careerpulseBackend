import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrudCompnonentPageComponent} from './crud-compnonent-page/crud-compnonent-page.component';

const routes: Routes = [
  {
    path: '',
    component: CrudCompnonentPageComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
