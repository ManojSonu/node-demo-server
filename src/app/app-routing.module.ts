import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { OrdersComponent } from './components/orders/orders.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/home' },
  { path: 'home',  component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'orders', component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
