import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ElectronService } from './providers/electron.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { WebviewDirective } from './directives/webview.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatRadioModule} from '@angular/material/radio';

import { AppComponent } from './app.component';
import { HomeComponent} from './components/home/home.component';
import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';
import { NgxEditorModule } from 'ngx-editor';
import { CrudCompnonentPageComponent } from './crud-compnonent-page/crud-compnonent-page.component';
import {ElishCustomMaterialModule} from './shared/custommaterial/custommaterial.module';
import { TransferHtmlContentPipe } from './transfer-html-content.pipe';
import {MatDialogModule} from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyDialogComponent,
    AppComponent,
    HomeComponent,
    WebviewDirective,
    DatepickerPopupComponent,
    CrudCompnonentPageComponent,
    TransferHtmlContentPipe,
  ],
  imports: [
    TooltipModule.forRoot(),
    AngularFontAwesomeModule,
    NgxEditorModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ElishCustomMaterialModule,
    NgbModule,
    MatDialogModule,
    MatRadioModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ], entryComponents: [
    MyDialogComponent,
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
