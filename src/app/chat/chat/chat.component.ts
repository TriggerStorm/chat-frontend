import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ChatService} from './shared/chat.service';
import {Observable, Subject, Subscription} from 'rxjs';
import {ChatMsg} from './shared/chat-msg-model';
import {takeUntil} from 'rxjs/operators';
import {ChatClient} from './shared/chat-clent.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  message = new FormControl('');
  messages: ChatMsg[] = [];
  sub: Subscription = new Subscription();
  sub2: Subscription = new Subscription();
  name: string | undefined;
  nameFC = new FormControl('');
  clients: ChatClient[] = [];
  unsubscribe$ = new Subject();
  clients$: Observable<ChatClient[]> | undefined;
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.sub = this.chatService.listenForMessages()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(message => {
        this.messages.push(message);
      });
    this.sub2 = this.chatService.listenForClients()
      .subscribe(clients => {
        this.clients = clients;
      });
  }

  ngOnDestroy(): void {
    console.log('Destroyed');
    if (this.sub) {
      this.sub.unsubscribe();
    }
    if (this.sub2) {
      this.sub.unsubscribe();
    }
  }

  sendMessage(): void {
    console.log(this.message.value);
    this.chatService.sendMessage(this.message.value);
  }

  sendName(): void {
    this.name = this.nameFC.value;
    if (this.name) {
      this.chatService.sendName(this.name);
  }
  }
}
