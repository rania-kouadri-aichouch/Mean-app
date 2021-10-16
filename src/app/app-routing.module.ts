import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {Page3Component} from './page3/page3.component';
import {Lien1Component} from './lien1/lien1.component';
import {Lien2Component} from './lien2/lien2.component';
import {Lien3Component} from './lien3/lien3.component';
import { PageIndexComponent } from './page-index/page-index.component';




const routes: Routes = [
  {path :'page1' ,component:Page1Component},
  {path :'cours/:id' ,component:Page2Component},
  {path :'page3' ,component:Page3Component},
{path :'page-index' ,component:PageIndexComponent},
    {path :'lien1' ,component:Lien1Component},
    {path :'lien2' ,component:Lien2Component},
    {path :'lien3' ,component:Lien3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  /*export const routingComponents = [Page1Component];
  export const routingComponents2 = [Page2Component];
  export const routingComponents3 = [Lien1Component];
  export const routingComponents4 = [Lien2Component];
  export const routingComponents5 = [Lien3Component];*/
