import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { QuickBitesComponent } from './quick-bites.component';

const routes: Routes = [
    { path: '', component: QuickBitesComponent } 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuickBitesRoutingModule {}
