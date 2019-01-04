import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { GifComponent } from './gif.component';

const routes: Routes = [Shell.childRoutes([{ path: 'Gif', component: GifComponent, data: { title: extract('Gif') } }])];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GifRoutingModule {}
