import {NgModule} from '@angular/core';
import {IonicModule} from "ionic-angular";
import {ShellPageModule} from "./pages/shellPage.module";


@NgModule({
  imports: [
    IonicModule,
    ShellPageModule
  ],
  exports: [ShellPageModule],
  providers: [],
})
export class ShellModule {
}
