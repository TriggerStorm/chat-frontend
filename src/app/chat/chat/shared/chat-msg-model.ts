import { ChatClient } from './chat-client.model';

export interface ChatMsg {
  message: string;
  sender: ChatClient;
}
