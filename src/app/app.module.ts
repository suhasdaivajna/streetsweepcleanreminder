import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MdButtonToggleModule} from '@angular2-material/button-toggle/button-toggle';
import {MdButtonModule} from '@angular2-material/button/button';
import {MdCheckboxModule} from '@angular2-material/checkbox/checkbox';
import {MdRadioModule} from '@angular2-material/radio/radio';
import {MdSlideToggleModule} from '@angular2-material/slide-toggle/slide-toggle';
import {MdSliderModule} from '@angular2-material/slider/slider';
import {MdSidenavModule} from '@angular2-material/sidenav/sidenav';
import {MdListModule} from '@angular2-material/list/list';
import {MdGridListModule} from '@angular2-material/grid-list/grid-list';
import {MdCardModule} from '@angular2-material/card/card';
import {MdIconModule} from '@angular2-material/icon/icon';
import {MdProgressCircleModule} from '@angular2-material/progress-circle/progress-circle';
import {MdProgressBarModule} from '@angular2-material/progress-bar/progress-bar';
import {MdInputModule} from '@angular2-material/input/input';
import {MdTabsModule} from '@angular2-material/tabs/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar/toolbar';
import {MdTooltipModule} from '@angular2-material/tooltip/tooltip';
import {MdRippleModule} from '@angular2-material/core/ripple/ripple';
import {PortalModule} from '@angular2-material/core/portal/portal-directives';
import {OverlayModule} from '@angular2-material/core/overlay/overlay-directives';
import {MdMenuModule} from '@angular2-material/menu/menu';
import {RtlModule} from '@angular2-material/core/rtl/dir';

import { PolymerElement } from '@vaadin/angular2-polymer';

import { AppComponent } from './app.component';
import { AUTH_PROVIDERS }      from 'angular2-jwt';


@NgModule({
  declarations: [
    AppComponent,
    PolymerElement('vaadin-combo-box'),
    PolymerElement('vaadin-date-picker'),
    PolymerElement('vaadin-grid'),
    PolymerElement('paper-badge'),
    PolymerElement('paper-button'),
    PolymerElement('paper-card'),
    PolymerElement('paper-checkbox'),
    PolymerElement('paper-dialog'),
    PolymerElement('paper-dialog-scrollable'),
    PolymerElement('paper-drawer-panel'),
    PolymerElement('paper-dropdown-menu'),
    PolymerElement('paper-fab'),
    PolymerElement('paper-header-panel'),
    PolymerElement('paper-icon-button'),
    PolymerElement('paper-input'),
    PolymerElement('paper-item'),
    PolymerElement('paper-listbox'),
    PolymerElement('paper-material'),
    PolymerElement('paper-menu'),
    PolymerElement('paper-menu-button'),
    PolymerElement('paper-progress'),
    PolymerElement('paper-radio-button'),
    PolymerElement('paper-radio-group'),
    PolymerElement('paper-ripple'),
    PolymerElement('paper-scroll-header-panel'),
    PolymerElement('paper-slider'),
    PolymerElement('paper-spinner'),
    PolymerElement('paper-tabs'),
    PolymerElement('paper-toast'),
    PolymerElement('paper-toggle-button'),
    PolymerElement('paper-toolbar'),
    PolymerElement('paper-tooltip'),
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressCircleModule,
    MdRadioModule,
    MdRippleModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    OverlayModule,
    PortalModule,
    RtlModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
