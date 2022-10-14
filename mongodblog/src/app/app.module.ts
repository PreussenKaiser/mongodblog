import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { Repository } from './services/Repository';
import { BlogService } from './services/blog.service';
import { IBlog } from './models/IBlog';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DashboardComponent,
    DeleteComponent,
    UpdateComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: Repository<IBlog>, useClass: BlogService }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
