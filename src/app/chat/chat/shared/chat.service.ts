import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ChatMsg} from './chat-msg-model';
import {ChatClient} from './chat-clent.model';
import {SocketChat} from '../../../app.module';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chatClient: ChatClient | undefined;

  constructor(private socket: SocketChat) { }

  sendMessage(msg: string): void {
    this.socket.emit('message', msg);
  }

  listenForMessages(): Observable<ChatMsg> {
    return this.socket
      .fromEvent<ChatMsg>('messages');
  }
  listenForClients(): Observable<any> {
    return this.socket
      .fromEvent<any>('clients');
  }

  sendName(name: string): void {
    this.socket.emit('name', name);
  }
}
