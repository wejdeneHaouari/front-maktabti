import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultImageBookPipe} from '../../pipes/default-image-book.pipe';
import {DefaultImageUserPipe} from '../../pipes/default-image-user.pipe';

@NgModule({
  declarations: [DefaultImageBookPipe,
    DefaultImageUserPipe

  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefaultImageBookPipe,
    DefaultImageUserPipe

  ]
})
export class SharedModuleModule {
}
