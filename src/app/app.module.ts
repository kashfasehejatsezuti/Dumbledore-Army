import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HogwartsComponent } from './Components/hogwarts/hogwarts.component';
import { GryffindorComponent } from './Components/gryffindor/gryffindor.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { SlytherinComponent } from './Components/slytherin/slytherin.component';
import { SlytherinModule} from './Components/slytherin/slytherin.module'
import { HufflepuffComponent } from './Components/hufflepuff/hufflepuff.component';
import { RavenclawComponent } from './Components/ravenclaw/ravenclaw.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { GryffindorModule } from './Components/gryffindor/gryffindor.module';
import { HufflepuffModule } from './Components/hufflepuff/hufflepuff.module';
import { RavenclawModule } from './Components/ravenclaw/ravenclaw.module';
import { FooterComponent } from './Components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HogwartsComponent,
    GryffindorComponent,
    HeaderComponent,
    SlytherinComponent,
    HufflepuffComponent,
    RavenclawComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
