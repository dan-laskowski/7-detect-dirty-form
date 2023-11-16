import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { FormGuard } from './form.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'form',
    canDeactivate: [FormGuard],
    component: FormComponent,
  },
];
