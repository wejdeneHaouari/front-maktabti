import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultImageBookPipe} from '../../pipes/default-image-book.pipe';
import { NzMenuModule } from 'ng-zorro-antd/menu';
@NgModule({
  declarations: [DefaultImageBookPipe,
  ],
  imports: [
    NzMenuModule,
    CommonModule
  ],
  exports: [
    DefaultImageBookPipe
  ]
})
export class SharedModuleModule {
}
