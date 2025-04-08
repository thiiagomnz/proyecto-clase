import { Routes } from '@angular/router';
import path from 'path';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { FormularioComponent } from './contacto/formulario/formulario.component';
import { ProductoComponent } from './productos/producto/producto.component';

export const routes: Routes = [
    {path: "", redirectTo:"/inicio", pathMatch:"full"},

    {path:"inicio", component:InicioComponent},

    {path:"contacto", component:FormularioComponent},

    {path:"producto", component:ProductoComponent}
];
