import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MessageComponent } from './components/message/message.component';

const materialComponents = [
    MatProgressSpinnerModule,
    MatSnackBarModule,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        materialComponents,
    ],
    declarations: [
        HeaderComponent,
        LoaderComponent,
        MessageComponent,
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        materialComponents,
        HeaderComponent,
        LoaderComponent,
        MessageComponent,
    ]
})

export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }

    constructor() { }
}