import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgAboveComponent } from './img-above/img-above.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { DnMenuComponent } from './dn-menu/dn-menu.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { SectionMoviesComponent } from './section-movies/section-movies.component';
import { PanelNsComponent } from './panel-ns/panel-ns.component';
import { PanelCsComponent } from './panel-cs/panel-cs.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgAboveComponent,
    SubMenuComponent,
    DnMenuComponent,
    HomeBannerComponent,
    SectionMoviesComponent,
    PanelNsComponent,
    PanelCsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
