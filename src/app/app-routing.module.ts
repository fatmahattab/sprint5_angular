import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';
import { AddFruitComponent } from './add-fruit/add-fruit.component';
import { UpdateFruitComponent } from './update-fruit/update-fruit.component';
import { RchercheParSaisonComponent } from './rcherche-par-saison/rcherche-par-saison.component';
import { RechercherParNomComponent } from './rechercher-par-nom/rechercher-par-nom.component';
import { ListeSaisonsComponent } from './liste-saisons/liste-saisons.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FruitGuard } from './fruit.guard';

const routes: Routes = [
{path :"fruits" ,component :FruitsComponent},
{path :"add-fruit" ,component :AddFruitComponent,canActivate:[FruitGuard]},
{ path: "", redirectTo: "fruits", pathMatch: "full" },
{path:"rchercheParSaison",component:RchercheParSaisonComponent},
{path:"rechercherParNom",component:RechercherParNomComponent},
{path: "listeSaisons", component : ListeSaisonsComponent},
{path: "updateFruit/:id", component: UpdateFruitComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
