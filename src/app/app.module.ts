
import {Injectable, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Socket, SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {SharedModule} from './shared/shared.module';



@Injectable()
export class SocketChat extends Socket {

  constructor() {
    super({ url: 'http://localhost:3100', options: {} });
  }

}

@Injectable()
export class SocketStock extends Socket {

  constructor() {
    super({ url: 'http://localhost:3200', options: {} });
  }

}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule,
    SharedModule
  ],
  providers: [SocketStock, SocketChat],
  bootstrap: [AppComponent]
})
export class AppModule { }
