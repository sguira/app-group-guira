import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposDeComponent } from './component/a-propos-de/a-propos-de.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { AdminComponent } from './component/admin/admin.component';
import { AuthComponent } from './component/auth/auth.component';
import { CategorieComponent } from './component/categorie/categorie.component';
import { ContactComponent } from './component/contact/contact.component';
import { DetailsComponent } from './component/details/details.component';
import { NewComponent } from './component/new/new.component';
import { OrganigrammeComponent } from './component/organigramme/organigramme.component';
import { ProduitComponent } from './component/produit/produit.component';
import { ProduitService } from './service/produit.service';
import { AuthGuard } from './service2/auth.guard';

const routes: Routes = [{
        path: '',
        component: AccueilComponent
    },
    {
        path: 'accueil',
        component: AccueilComponent
    },
    {
        path: 'categorie',
        component: CategorieComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'organigramme',
        component: OrganigrammeComponent
    },
    {
        path: 'new',
        component: NewComponent
    },
    {
        path: 'propos',
        component: AProposDeComponent
    },
    {
        path: 'details/:url',
        component: DetailsComponent
    },
    {
      path:"admin",
      canActivate:[AuthGuard],
      component:AdminComponent
    },
    {
      path:'auth',
      component:AuthComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
