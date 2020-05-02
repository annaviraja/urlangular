import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlComponent } from './url/url.component';
import { NewUrlComponent } from './new-url/new-url.component';


const routes: Routes = [{
  "path":'url',
  "component":UrlComponent
},{
  "path":'new',
  "component":NewUrlComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
