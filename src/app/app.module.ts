import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrgChartModule } from 'angular-org-chart';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContactComponent } from './component/contact/contact.component';
import { OrganigrammeComponent } from './component/organigramme/organigramme.component';
import { NewComponent } from './component/new/new.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { AProposDeComponent } from './component/a-propos-de/a-propos-de.component';
import { SliderComponent } from './component/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProduitComponent } from './component/produit/produit.component';
import { CategorieComponent } from './component/categorie/categorie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { SearchComponent } from './component/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './component/details/details.component';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select'
import {MatMenuModule} from '@angular/material/menu'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Header2Component } from './component/header2/header2.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import {MatDividerModule} from '@angular/material/divider'
import {MatListModule} from '@angular/material/list';
import { AdminComponent } from './component/admin/admin.component';
import { AuthComponent } from './component/auth/auth.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { InterceptorService } from './service2/interceptor.service';
import { ConfirmComponent } from './component/confirm/confirm.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ContactComponent,
        OrganigrammeComponent,
        NewComponent,
        AccueilComponent,
        AProposDeComponent,
        SliderComponent,
        ProduitComponent,
        CategorieComponent,
        SearchComponent,
        DetailsComponent,
        Header2Component,
        AdminComponent,
        AuthComponent,
        ConfirmComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        OrgChartModule,
        NgxOrgChartModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        NgbModule,
        FormsModule,
        MatInputModule,
        MatGridListModule,
        ReactiveFormsModule,
        MatInputModule,
        HttpClientModule,
        MatMenuModule,
        IvyCarouselModule,
        MatProgressBarModule,
        MatDialogModule,
        MatDividerModule,
        MatListModule,
        MatSelectModule,
        MatProgressBarModule
    ],
    providers: [
      {
        provide:HTTP_INTERCEPTORS,
        useClass:InterceptorService,
        multi:true
      }
    ],
    entryComponents:[ConfirmComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
