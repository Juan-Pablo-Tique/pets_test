import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./components/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'pets',
    loadChildren: () =>
      import('./components/pages/pets/pets.module').then((m) => m.PetsModule),
  },
  {
    path: 'institutions',
    loadChildren: () =>
      import('./components/pages/institutions/institutions.module').then(
        (m) => m.InstitutionsModule
      ),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./components/pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
