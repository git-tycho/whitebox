import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { JobsAccordionComponent } from './jobs-accordion/jobs-accordion.component';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    JobsAccordionComponent,
    ApplyFormComponent
  ],
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AccordionModule.forRoot()
  ],
  providers:    [ PostService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
