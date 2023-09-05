

import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { NbThemeModule } from '@nebular/theme';
import { AppComponent } from './app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(NbThemeModule.forRoot(), BrowserModule, BrowserAnimationsModule),
        provideRouter([])
    ],
}).catch(err => console.error(err));
