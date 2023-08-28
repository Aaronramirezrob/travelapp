import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "products",
    component: ProductsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
