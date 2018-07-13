import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RouteNames } from './route-names';
import { TestComponent } from '../test/test.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const main: Route = {
  path: RouteNames.Root,
  component: HomeComponent,
  data: { title: 'Main' }
};
const testRoute: Route = {
  path: RouteNames.Test,
  component: TestComponent,
  data: { title: 'Test' }
};
const root: Route = {
  path: RouteNames.Root,
  children: [testRoute, main]
};
const pageNotFound: Route = {
  path: RouteNames.CatchAll,
  component: PageNotFoundComponent
};
const routes: Routes = [root, pageNotFound];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class MainRoutingModule {}
