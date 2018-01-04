import {Component, ViewChild} from '@angular/core';
import {App, IonicPage, NavController, NavParams, Slides, ViewController} from 'ionic-angular';

/**
 * Generated class for the ShellEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shell-entry',
  templateUrl: 'shell-entry.html',
})

export class ShellEntryPage {
  welcomePages: string[] = [];
  pagePath = './assets/imgs/welcome/w';
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    for (let i = 1; i < 4; i++) {
      this.welcomePages.push(`${this.pagePath}${i}.jpg`);
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ShellEntryPage');
  }

  listenEnd() {
    // console.log('I got end');
  }

  goNextPage() {
    const distPage = this.renderDistPage();
    if (this.slides.getActiveIndex() !== this.slides.length()) return;
    this.navCtrl.setRoot(distPage);
  }

  private renderDistPage() {
    const Tool = 'ToolPage';
    const stander = 'StanderPage';
    const mode = query('mode');
    return +mode === 2 ? stander : Tool;

    function query(params) {
      const search = window.location.search.length > 0 ? window.location.search.substring(1) : "";
      const items = search.split("&");
      if (search.length === 0) {
        return "";
      }
      for (let i = 0; i < items.length; i++) {
        const t = items[i].split("=");
        const name = decodeURIComponent(t[0]);
        if (name.toLowerCase() === params.toLowerCase()) {
          // noinspection UnnecessaryLocalVariableJS
          let mode = decodeURIComponent(t[1]);
          return mode;
        }
      }
      return "";
    }
  }


}
