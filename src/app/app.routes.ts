import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { OfertasComponent } from './paginas/ofertas/ofertas.component';
import { QuienesomosComponent } from './paginas/quienesomos/quienesomos.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';

export const routes: Routes = [
    {path: "", redirectTo:"/inicio", pathMatch:"full"},

    {path:"inicio", component:InicioComponent},

    {path:"contacto", component:ContactoComponent},

    {path:"producto", component:ProductosComponent},

    {path:"ofertas", component:OfertasComponent},

    {path:"quienesomos", component:QuienesomosComponent},

    {path:"carrito", component:CarritoComponent},
];
