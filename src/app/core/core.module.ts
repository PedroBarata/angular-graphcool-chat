import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApolloConfigModule } from '../apollo-config.module';
@NgModule({
  exports: [
    BrowserAnimationsModule,
    ApolloConfigModule,
    HttpClientModule,
    AppRoutingModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class CoreModule {

  /* O SkipSelf é um decorator usado para verificar se existe a instância do módulo em questão,
  em mais de um lugar, se sim, ele ignora e pega a do nível em que ele se encontra (nesse caso, no appModule) */
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    /* O 'if' é usado para verificar se está sendo importado em mais de um módulo,
    se for verdade, ele entra na condição do 'if'. Portanto, lançamos um erro.*/
    if(parentModule) {
      throw new Error("CoreModule is already loaded. Import it only on this AppModule!");
    }
  }
 }
