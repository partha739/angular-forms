import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './services/auth-guard.service';
import{HttpClientModule,HTTP_INTERCEPTORS} from'@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

import { ApiserviceService } from './services/apiservice.service';
import { ReadComponent } from './read/read.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';
import { MystoreComponent } from './mystore/mystore.component';
import { OrdersComponent } from './orders/orders.component';
import { BrandComponent } from './brand/brand.component';

import { AuthInterceptorsService } from './services/auth-interceptors.service';
const routes: Routes = [
  {
    path:"read",component:ReadComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"posts",component:PostsComponent
    ,canActivate:[AuthGuardService]
  },
  {
    path:"home",component:HomeComponent},
    {
    path:"orders",component:OrdersComponent
  },{
    path:"addproduct",component:AddproductComponent
  },
 
  {
    path:"brand",component:BrandComponent
  },
  {path:"registrationform",component:SignupComponent},
  {path:"loginform",component:LoginComponent},

  {path:"mystore",component:MystoreComponent},
  {path:"createpost",component:CreatePostComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    SignupComponent,
    LoginComponent,
    PostsComponent,
    CreatePostComponent,
    AddproductComponent,
    HomeComponent,
    MystoreComponent,
    OrdersComponent,
    BrandComponent,
    
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule,
    MatSidenavModule,MatFormFieldModule,MatGridListModule,HttpClientModule,
    MatSelectModule,MatListModule,MatIconModule,MatCardModule,MatProgressBarModule,MatCheckboxModule,MatButtonModule,
    MatToolbarModule,BrowserAnimationsModule,MdbFormsModule,RouterModule.forRoot(routes), MdbAccordionModule, MdbCarouselModule, MdbCheckboxModule, MdbCollapseModule, MdbDropdownModule, MdbModalModule, MdbPopoverModule, MdbRadioModule, MdbRangeModule, MdbRippleModule, MdbScrollspyModule, MdbTabsModule, MdbTooltipModule, MdbValidationModule
  
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorsService,
      multi:true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
