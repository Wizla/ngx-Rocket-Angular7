import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { TranslateModule } from '@ngx-translate/core';
import { GifItemComponent } from './gif-item.component';
import { GifRoutingModule } from './gif-routing.module';
import { GifComponent } from './gif.component';
import { GifService } from './gif.service';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, GifRoutingModule, SharedModule],
  declarations: [GifComponent, GifItemComponent],
  providers: [GifService]
})
export class GifModule {}
