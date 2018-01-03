import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ShellEntryPage} from './shell-entry';

@NgModule({
  declarations: [
    ShellEntryPage,
  ],
  imports: [
    IonicPageModule.forChild(ShellEntryPage),
  ],
})
export class ShellEntryPageModule {
}
