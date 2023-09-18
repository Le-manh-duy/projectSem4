import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './homePage/home.component';
import { DetailComponent } from './detailItem/detail.component';
import { CartComponent } from './shoppingCart/cart.component';
import { LoginComponent } from './loginPage/login.component';

const appRoutes =[{ path: '', component: HomeComponent  },
{ path: 'detail', component: DetailComponent},
{path: 'cart', component: CartComponent},
{path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [BrowserModule, RouterModule.forRoot(appRoutes),HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
