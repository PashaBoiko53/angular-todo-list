import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FilterPipe } from './filter.pipe';
import { FilterCategoryPipe } from './filter-category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    FilterPipe,
    FilterCategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
