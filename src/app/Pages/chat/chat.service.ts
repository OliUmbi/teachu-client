import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ChatConversationDTO } from 'src/app/DTOs/ChatConversationDTO';
import { ChatConversationInfoDTO } from 'src/app/DTOs/ChatConversationInfoDTO';
import { ChatMessageDTO } from 'src/app/DTOs/ChatMessageDTO';
import { ChatNewGroupDTO } from 'src/app/DTOs/ChatNewGroupDTO';
import { ChatOverviewDTO } from 'src/app/DTOs/ChatOverviewDTO';
import { ChatUserDTO } from 'src/app/DTOs/ChatUserDTO';
import { addMinutes } from 'src/app/Framework/Helpers/DateHelpers';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  getChatOverview$(): Observable<ChatOverviewDTO[]> {
    // todo implement from backend endpoint with websocket
    const mockData = [
      {
        chatId: '1',
        chatName: 'Mathinachhilf',
        chatType: 'GROUP',
        chatImage: 'https://www.w3schools.com/howto/img_avatar.png',
        lastMessage: 'Hello',
        lastMessageFrom: 'Oliver Umbricht',
        lastMessageDate: addMinutes(new Date(), -10)
      } as ChatOverviewDTO,
      {
        chatId: '2',
        chatName: 'Chat 2',
        chatType: 'GROUP',
        chatImage: 'https://www.w3schools.com/howto/img_avatar.png',
        lastMessage: 'Last message Chat 2',
        lastMessageFrom: null,
        lastMessageDate: addMinutes(new Date(), -20)
      } as ChatOverviewDTO,
      {
        chatId: '3',
        chatName: 'Micha Schweizer',
        chatType: 'PRIVATE',
        chatImage: 'https://www.w3schools.com/howto/img_avatar.png',
        lastMessage: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        lastMessageFrom: 'Micha Schweizer',
        lastMessageDate: addMinutes(new Date(), -2000)
      } as ChatOverviewDTO,
      {
        chatId: '4',
        chatName: 'Jonas Hauser',
        chatType: 'PRIVATE',
        chatImage: 'https://www.w3schools.com/howto/img_avatar.png',
        lastMessage: 'Last message Chat Jonas',
        lastMessageFrom: null,
        lastMessageDate: addMinutes(new Date(), -5000)
      } as ChatOverviewDTO,
    ];
    return of(mockData);
  }

  getChatConversation$(chatId: string): Observable<ChatConversationDTO> {
    // todo implement from backend endpoint with websocket - mockdata for group chat Mathinachhilf
    const mockData = {
      info: {
        chatImage: 'https://www.w3schools.com/howto/img_avatar.png',
        chatName: 'Mathinachhilf',
        chatType: 'GROUP',
        isUserAdmin: true,
        participants: [{
          name: null,
          image: 'https://www.w3schools.com/howto/img_avatar.png',
          role: 'STUDENT',
          isAdmin: true
        }, {
          name: 'Oliver Andreas Umbricht',
          image: 'https://www.w3schools.com/howto/img_avatar.png',
          role: 'STUDENT',
          isAdmin: false
        }, {
          name: 'Felix Winzenried',
          image: 'https://www.w3schools.com/howto/img_avatar.png',
          role: 'STUDENT',
          isAdmin: false
        }, {
          name: 'Stefano La Rosa',
          image: 'https://www.w3schools.com/howto/img_avatar.png',
          role: 'TEACHER',
          isAdmin: false
        }, {
          name: 'Roberto Formisano',
          image: 'https://www.w3schools.com/howto/img_avatar.png',
          role: 'TEACHER',
          isAdmin: false
        }, {
          name: 'Flurin Jan Bruppacher',
          image: 'https://www.w3schools.com/howto/img_avatar.png',
          role: 'STUDENT',
          isAdmin: false
        }]
      } as ChatConversationInfoDTO,
      messages: [{
        message: 'Jonas Hauser|chat.leftTheChat',
        sender: null,
        timestamp: addMinutes(new Date(), -5000),
        isInfoOnly: true
      }, {
        message: 'Hello Hello',
        sender: null,
        timestamp: addMinutes(new Date(), -4000),
        isInfoOnly: false
      }, {
        message: 'Felix Winzenried|chat.joinedTheChat',
        sender: null,
        timestamp: addMinutes(new Date(), -3500),
        isInfoOnly: true
      }, {
        message: 'Gits na en Session',
        sender: 'Felix Winzenried',
        timestamp: addMinutes(new Date(), -3000),
        isInfoOnly: false
      }, {
        message: 'S git na eine',
        sender: 'Oliver Umbricht',
        timestamp: addMinutes(new Date(), -2500),
        isInfoOnly: false
      }, {
        message: 'Chömed Buebe dünd mal schaffe',
        sender: 'Stefano La Rosa',
        timestamp: addMinutes(new Date(), -10),
        isInfoOnly: false
      }] as ChatMessageDTO[]
    } as ChatConversationDTO;
    return of(mockData);
  }

  getChatConversationInfo$(chatId: string): Observable<ChatConversationInfoDTO> {
    // todo implement from backend endpoint with websocket
    return this.getChatConversation$(chatId).pipe(
      map(chatConversation => chatConversation.info)
    );
  }

  getChatUser$(): Observable<ChatUserDTO[]> {
    // todo implement from backend endpoint
    const mockData = [{
      id: '1',
      name: 'Oliver Umbricht'
    }, {
      id: '2',
      name: 'Felix Winzenried'
    }, {
      id: '3',
      name: 'Micha Schweizer'
    }, {
      id: '4',
      name: 'Roman Bürge'
    }];
    return of(mockData);
  }

  createChatGroup$(value: ChatNewGroupDTO) {
    // todo implement from backend endpoint
    return of(null);
  }

  createChatPrivate$(userId: string) {
    // todo implement from backend endpoint
    return of(null);
  }
}
