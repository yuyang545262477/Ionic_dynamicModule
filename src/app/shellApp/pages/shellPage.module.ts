import {NgModule} from '@angular/core';
import {ShellEntryPageModule} from "./shell-entry/shell-entry.module";
import {ShellOnePageModule} from "./shell-one/shell-one.module";
import {ShellTwoPageModule} from "./shell-two/shell-two.module";

const shellPageList = [
  ShellEntryPageModule,
  ShellOnePageModule,
  ShellTwoPageModule
];

@NgModule({
  imports: [shellPageList],
  exports: [shellPageList],
  declarations: [],
  providers: [],
})
export class ShellPageModule {
}
