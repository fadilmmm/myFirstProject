import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ClassComponent } from './class/class.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ProductComponent } from './product/product.component';
import { ObservableTestComponent } from './observable-test/observable-test.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormTestComponent } from './form-test/form-test.component';

import { CommentListComponent } from './comment-list/comment-list.component';
import { CsvFileComponent } from './csv-file/csv-file.component';

export const routes: Routes = [
    {
        path : "",
        component: UserComponent,
    },
  
    {
        path : "user",
        component: UserComponent,
    },
    {
        path : "home",
        component: HomeComponent,
    },
    {
        path : "class",
        component: ClassComponent,
    },
    {
        path : "parent",
        component: ParentComponent,
    },
    {
        path : "product",
        component: ProductComponent,
    },
    {
        path : "observable",
        component: ObservableTestComponent,
    },
    {
        path : "pipe",
        component: PipeComponent,
    },
    {
        path : "form",
        component: FormTestComponent,
    },
    {
        path : "comment",
        component: CommentListComponent,
    },
    {
        path : "csv-file",
        component: CsvFileComponent,
    },

    
];
