import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShellOnePage } from './shell-one';

@NgModule({
  declarations: [
    ShellOnePage,
  ],
  imports: [
    IonicPageModule.forChild(ShellOnePage),
  ],
})
export class ShellOnePageModule {}
