import { Moment } from "moment";

export interface User {
    id: string;
    name: string;
    isOnline: boolean;
    avatar:string;
  }
  
  export interface Message {
    id: string;
    content: string;
    sender: User;
    timestamp: Moment;
  }
  
  export interface ChatConfig {
    theme: 'light' | 'dark';
    showAvatars: boolean;
    isGroupChat: boolean;
    customStyles?: React.CSSProperties;
    sidebarVisible: boolean;
    fontFamily?: string;
  }
  